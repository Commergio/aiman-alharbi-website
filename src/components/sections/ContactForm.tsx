"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const { dict, locale } = useTranslations();
  const s = dict.sections.contact.form;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const website = String(formData.get("website") ?? "").trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          serviceType,
          message,
          locale,
          website,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setServiceType("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="glass-card space-y-4 rounded-[1.5rem] border border-white/50 p-4 shadow-[0_24px_60px_-36px_rgba(15,39,69,0.35)] backdrop-blur-xl sm:p-6 md:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <p className="text-sm font-medium text-[#0F2745]">{s.title}</p>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <Input
        placeholder={s.name}
        className="input-premium"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoComplete="name"
        disabled={status === "loading"}
      />
      <Input
        placeholder={s.email}
        className="input-premium"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
        inputMode="email"
        disabled={status === "loading"}
      />
      <Input
        placeholder={s.phone}
        className="input-premium"
        type="tel"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        autoComplete="tel"
        disabled={status === "loading"}
      />
      <Select
        className="input-premium"
        name="serviceType"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        required
        disabled={status === "loading"}
      >
        <option value="" disabled>
          {s.serviceType}
        </option>
        {s.options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>
      <Textarea
        placeholder={s.message}
        className="input-premium min-h-[120px]"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        disabled={status === "loading"}
      />

      {status === "success" ? (
        <p className="rounded-xl border border-[#25D366]/25 bg-[#25D366]/8 px-4 py-3 text-sm leading-relaxed text-[#1e5631]" role="status">
          {s.success}
        </p>
      ) : null}

      {status === "error" ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800" role="alert">
          {s.error}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className={cn("w-full sm:w-auto", status === "loading" && "opacity-80")}
        disabled={status === "loading"}
      >
        {status === "loading" ? s.sending : s.submit}
      </Button>
    </form>
  );
}
