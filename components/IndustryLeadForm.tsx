"use client";

import type { FormEvent } from "react";

export default function IndustryLeadForm({
  industry,
  organisationLabel,
  scaleLabel,
  requirementsLabel,
}: {
  industry: string;
  organisationLabel: string;
  scaleLabel: string;
  requirementsLabel: string;
}) {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = [...data.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${String(value).trim()}`)
      .join("\n");
    const message = `Hello XOFOZ,\n\nI would like an IT consultation for a ${industry} business.\nSource: ${window.location.href}\n\n${details}`;
    window.open(`https://wa.me/971523554202?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form industry-consultation__form" onSubmit={submit}>
      <span className="eyebrow">Industry consultation</span>
      <h3>Tell us about your environment.</h3>
      <input type="hidden" name="Industry" value={industry} />
      <div className="form-split">
        <label>Your name<input name="Name" autoComplete="name" required /></label>
        <label>{organisationLabel}<input name="Organisation" autoComplete="organization" required /></label>
      </div>
      <div className="form-split">
        <label>Phone number<input name="Phone" type="tel" autoComplete="tel" required /></label>
        <label>Email address<input name="Email" type="email" autoComplete="email" required /></label>
      </div>
      <label>{scaleLabel}<input name="Scale" /></label>
      <label>{requirementsLabel}<textarea name="Requirements" rows={5} required /></label>
      <button className="button button--primary" type="submit">Prepare WhatsApp enquiry</button>
      <p className="sample-note">Your details open as a WhatsApp message for you to review before sending.</p>
    </form>
  );
}

