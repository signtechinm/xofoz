"use client";

import type { FormEvent } from "react";

export default function HomeLeadForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [...formData.entries()]
      .filter(([, value]) => String(value).trim())
      .map(([key, value]) => `${key}: ${String(value).trim()}`)
      .join("\n");
    const message = `Hello XOFOZ,\n\nI would like an IT consultation.\n\n${details}`;
    window.open(
      `https://wa.me/971523554202?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      className="contact-form home-contact-form"
      id="consultation"
      onSubmit={handleSubmit}
    >
      <span className="eyebrow">Free Consultation</span>
      <h2 className="section-title">Send your requirement.</h2>
      <div className="form-split">
        <label>Name<input name="Name" type="text" autoComplete="name" required /></label>
        <label>Company<input name="Company" type="text" autoComplete="organization" /></label>
      </div>
      <div className="form-split">
        <label>Phone<input name="Phone" type="tel" autoComplete="tel" required /></label>
        <label>Email<input name="Email" type="email" autoComplete="email" required /></label>
      </div>
      <label>What do you need help with?
        <select name="Service" defaultValue="" required>
          <option value="" disabled>Select a requirement</option>
          <option>Managed IT / AMC</option><option>Urgent IT support</option>
          <option>Network or Wi-Fi</option><option>Cybersecurity</option>
          <option>CCTV or access control</option><option>Cloud / Microsoft 365</option>
          <option>Tally Prime / ERP</option><option>Other</option>
        </select>
      </label>
      <label>Message<textarea name="Message" rows={5} required /></label>
      <button className="button button--primary" type="submit">Send via WhatsApp</button>
      <p className="sample-note">Your details will open as a prepared WhatsApp message for review before sending.</p>
    </form>
  );
}
