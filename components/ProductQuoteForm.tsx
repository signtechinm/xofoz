"use client";

import type { FormEvent } from "react";

export default function ProductQuoteForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [...formData.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${String(value).trim()}`)
      .join("\n");
    const message = `Hello XOFOZ,\n\nI would like a product quote.\n\n${details}`;
    window.open(`https://wa.me/971523554202?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="product-quote-form" onSubmit={handleSubmit}>
      <div className="form-split">
        <label>Your name<input name="Name" autoComplete="name" required /></label>
        <label>Company name<input name="Company" autoComplete="organization" /></label>
      </div>
      <div className="form-split">
        <label>Phone number<input name="Phone" type="tel" autoComplete="tel" required /></label>
        <label>Product or brand<input name="Product or brand" required /></label>
      </div>
      <label>Tell us what you need<textarea name="Requirement" rows={4} placeholder="Model, quantity, site location, or any installation requirements" required /></label>
      <button className="button button--primary" type="submit">Get a product quote <span aria-hidden="true">↗</span></button>
      <p>Your details open as a prepared WhatsApp message for review before sending.</p>
    </form>
  );
}
