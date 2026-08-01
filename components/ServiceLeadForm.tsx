"use client";

import type { FormEvent } from "react";

type ServiceLeadFormProps = {
  service: string;
  fields: string[];
  buttonLabel: string;
};

export default function ServiceLeadForm({
  service,
  fields,
  buttonLabel,
}: ServiceLeadFormProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [...formData.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${String(value).trim()}`)
      .join("\n");
    const message = `Hello XOFOZ,\n\nI would like help with ${service}.\n\n${details}`;
    window.open(`https://wa.me/971523554202?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form service-consultation__form" onSubmit={handleSubmit}>
      <span className="eyebrow">Free consultation</span>
      <h3>Tell us about your requirement.</h3>
      <div className="form-split">
        <label>{fields[0]}<input name="Name" autoComplete="name" required /></label>
        <label>{fields[1]}<input name="Company" autoComplete="organization" /></label>
      </div>
      <div className="form-split">
        <label>{fields[2]}<input name="Phone" type="tel" autoComplete="tel" required /></label>
        {fields[3] && <label>{fields[3]}<input name={fields[3]} /></label>}
      </div>
      {fields.length > 5 && (
        <label>{fields[4]}<input name={fields[4]} /></label>
      )}
      <label>{fields.at(-1)}<textarea name="Requirement" rows={5} required /></label>
      <button className="button button--primary" type="submit">{buttonLabel}</button>
      <p className="sample-note">Your details will open as a prepared WhatsApp message for review before sending.</p>
    </form>
  );
}
