"use client";

import { type FormEvent, useEffect, useState } from "react";

export default function SolutionLeadForm({ category, options, fields, buttonLabel }: { category: string; options: string[]; fields: string[]; buttonLabel: string }) {
  const [selected, setSelected] = useState(options[0] || category);

  useEffect(() => {
    const select = (event: Event) => setSelected((event as CustomEvent<string>).detail);
    window.addEventListener("xofoz:solution-selected", select);
    return () => window.removeEventListener("xofoz:solution-selected", select);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = [...data.entries()].filter(([, value]) => String(value).trim()).map(([key, value]) => `${key}: ${String(value).trim()}`).join("\n");
    const message = `Hello XOFOZ,\n\nI would like a consultation for ${category}.\n\n${details}`;
    window.open(`https://wa.me/971523554202?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="contact-form service-consultation__form" onSubmit={submit}>
      <span className="eyebrow">Free consultation</span>
      <h3>Tell us about your requirement.</h3>
      <div className="form-split">
        <label>{fields[0] || "Your name"}<input name="Name" autoComplete="name" required /></label>
        <label>{fields[1] || "Company name"}<input name="Company" autoComplete="organization" /></label>
      </div>
      <div className="form-split">
        <label>{fields[2] || "Phone number"}<input name="Phone" type="tel" autoComplete="tel" required /></label>
        <label>{fields[3] || "Solution required"}<select name="Solution" value={selected} onChange={(event) => setSelected(event.target.value)}>{options.map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <label>{fields[4] || "Tell us about your project requirements"}<textarea name="Requirement" rows={5} required /></label>
      <button className="button button--primary" type="submit">{buttonLabel}</button>
      <p className="sample-note">Your details will open as a prepared WhatsApp message for review before sending.</p>
    </form>
  );
}
