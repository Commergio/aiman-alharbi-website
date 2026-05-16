import { CONTACT } from "@/lib/content";

export const CONTACT_INBOX = process.env.CONTACT_TO_EMAIL ?? CONTACT.email;

export type ContactFormPayload = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  locale?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidContactEmail(email: string) {
  return email.length <= 254 && EMAIL_PATTERN.test(email);
}

export function parseContactFormBody(body: unknown): ContactFormPayload | null {
  if (!body || typeof body !== "object") return null;

  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim().toLowerCase() : "";
  const phone = typeof raw.phone === "string" ? raw.phone.trim() : "";
  const serviceType = typeof raw.serviceType === "string" ? raw.serviceType.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";
  const locale = typeof raw.locale === "string" ? raw.locale : undefined;

  if (!name || !email || !phone || !serviceType || !message) return null;
  if (!isValidContactEmail(email)) return null;
  if (name.length > 120 || phone.length > 40 || serviceType.length > 120 || message.length > 5000) {
    return null;
  }

  return { name, email, phone, serviceType, message, locale };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildContactEmailHtml(data: ContactFormPayload) {
  const messageHtml = escapeHtml(data.message).replace(/\n/g, "<br />");
  const localeLabel = data.locale === "en" ? "English" : data.locale === "ar" ? "العربية" : "";

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<body style="margin:0;font-family:Segoe UI,Tahoma,sans-serif;background:#f8fafc;padding:24px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e6edf5;border-radius:12px;overflow:hidden">
    <div style="background:#0F2745;color:#fff;padding:16px 20px">
      <h1 style="margin:0;font-size:18px">طلب استشارة — الموقع الرسمي</h1>
    </div>
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:10px 16px;font-weight:600;color:#0F2745">الاسم</td><td style="padding:10px 16px;color:#334B63">${escapeHtml(data.name)}</td></tr>
      <tr style="background:#fafcff"><td style="padding:10px 16px;font-weight:600;color:#0F2745">البريد</td><td style="padding:10px 16px;color:#334B63"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding:10px 16px;font-weight:600;color:#0F2745">الجوال</td><td style="padding:10px 16px;color:#334B63">${escapeHtml(data.phone)}</td></tr>
      <tr><td style="padding:10px 16px;font-weight:600;color:#0F2745">نوع الخدمة</td><td style="padding:10px 16px;color:#334B63">${escapeHtml(data.serviceType)}</td></tr>
      <tr style="background:#fafcff"><td style="padding:10px 16px;font-weight:600;color:#0F2745;vertical-align:top">الرسالة</td><td style="padding:10px 16px;color:#334B63">${messageHtml}</td></tr>
      ${localeLabel ? `<tr><td style="padding:10px 16px;font-weight:600;color:#0F2745">اللغة</td><td style="padding:10px 16px;color:#334B63">${localeLabel}</td></tr>` : ""}
    </table>
    <p style="padding:12px 20px 20px;margin:0;font-size:12px;color:#7a8ea7">أُرسل من نموذج التواصل في aimanalharbi.com</p>
  </div>
</body>
</html>`;
}

export function buildContactEmailText(data: ContactFormPayload) {
  const lines = [
    "طلب استشارة — الموقع الرسمي",
    "",
    `الاسم: ${data.name}`,
    `البريد: ${data.email}`,
    `الجوال: ${data.phone}`,
    `نوع الخدمة: ${data.serviceType}`,
    `الرسالة: ${data.message}`,
  ];
  if (data.locale) lines.push(`اللغة: ${data.locale}`);
  return lines.join("\n");
}
