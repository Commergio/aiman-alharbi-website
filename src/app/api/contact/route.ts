import { Resend } from "resend";
import { NextResponse } from "next/server";

import {
  buildContactEmailHtml,
  buildContactEmailText,
  CONTACT_INBOX,
  parseContactFormBody,
} from "@/lib/contact-form";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (typeof body?.website === "string" && body.website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    const data = parseContactFormBody(body);
    if (!data) {
      return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
    }

    if (!resend) {
      console.error("[contact] RESEND_API_KEY is not configured");
      return NextResponse.json({ error: "email_not_configured" }, { status: 503 });
    }

    const from =
      process.env.CONTACT_FROM_EMAIL ?? "Aiman Alharbi Website <onboarding@resend.dev>";
    const subject = `طلب استشارة — ${data.name}`;

    const { error } = await resend.emails.send({
      from,
      to: [CONTACT_INBOX],
      replyTo: data.email,
      subject,
      html: buildContactEmailHtml(data),
      text: buildContactEmailText(data),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
