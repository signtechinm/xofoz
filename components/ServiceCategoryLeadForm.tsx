"use client";

import { type FormEvent, useEffect, useState } from "react";

type SelectedService = { category: string; subService: string; source: string };

export default function ServiceCategoryLeadForm({
  category,
  options,
  fields,
  buttonLabel,
}: {
  category: string;
  options: string[];
  fields: string[];
  buttonLabel: string;
}) {
  const [selected, setSelected] = useState(options[0] || category);
  const [ctaSource, setCtaSource] = useState("category-form");

  useEffect(() => {
    function select(event: Event) {
      const detail = (event as CustomEvent<SelectedService>).detail;
      if (detail.category === category) {
        setSelected(detail.subService);
        setCtaSource(detail.source);
      }
    }
    window.addEventListener("xofoz:service-category-selected", select);
    return () => window.removeEventListener("xofoz:service-category-selected", select);
  }, [category]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const details = [...data.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${String(value).trim()}`)
      .join("\n");
    const message = `Hello XOFOZ,\n\nI would like a consultation for ${category}.\nSelected service: ${selected}\nSource page: ${window.location.href}\nCTA source: ${ctaSource}\n\n${details}`;
    window.open(
      `https://wa.me/971523554202?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="contact-form service-consultation__form" onSubmit={submit}>
      <span className="eyebrow">Free consultation</span>
      <h3>Tell us about your requirement.</h3>
      <div className="form-split">
        <label>
          {fields[0] || "Your name"}
          <input name="Name" autoComplete="name" required />
        </label>
        <label>
          {fields[1] || "Company name"}
          <input name="Company" autoComplete="organization" />
        </label>
      </div>
      <div className="form-split">
        <label>
          {fields[2] || "Phone number"}
          <input name="Phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          Service required
          <select name="Service" value={selected} onChange={(event) => { setSelected(event.target.value); setCtaSource("category-form"); }}>
            {options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
      </div>
      {fields.slice(3).map((field, index, extraFields) => {
        const isLast = index === extraFields.length - 1;
        const name = `Requirement ${index + 1}`;
        return <label key={field}>{field}{isLast ? <textarea name={name} rows={5} required /> : <input name={name} />}</label>;
      })}
      {fields.length <= 3 && <label>Tell us about your requirements<textarea name="Requirement" rows={5} required /></label>}
      <button className="button button--primary" type="submit">
        {buttonLabel}
      </button>
      <p className="sample-note" aria-live="polite">
        Your details will open as a prepared WhatsApp message for review before sending.
      </p>
    </form>
  );
}
