"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const appointmentDeadline = new Date("2026-10-30T23:59:59+04:00").getTime();

function daysRemaining() { return Math.max(0, Math.ceil((appointmentDeadline - Date.now()) / 86400000)); }

export default function HomeWelcomePopup() {
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState(daysRemaining);
  useEffect(() => { setOpen(true); setDays(daysRemaining()); }, []);
  useEffect(() => { if (!open) return; const timer = window.setInterval(() => setDays(daysRemaining()), 60000); return () => window.clearInterval(timer); }, [open]);
  function dismiss() { setOpen(false); }
  if (!open) return null;
  return (
    <div className="welcome-modal" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && dismiss()}>
      <section className="welcome-modal__panel" role="dialog" aria-modal="true" aria-labelledby="welcome-modal-title">
        <button className="welcome-modal__close" type="button" onClick={dismiss} aria-label="Close announcement">×</button>
        <div className="welcome-modal__signal"><span>UAE e-Invoicing deadline</span><b>Appointment milestone</b></div>
        <div className="welcome-modal__countdown"><strong>{days}</strong><span>days left<br /><b>30 October 2026</b></span></div>
        <div className="welcome-modal__body">
          <span className="eyebrow">A practical first step for UAE businesses</span>
          <h2 id="welcome-modal-title">Is your business ready for structured e-Invoicing?</h2>
          <p>Make sure your TallyPrime environment, master data, invoice workflow, and team are ready before your appointment milestone.</p>
          <div className="welcome-modal__note"><span>01</span><p>Assess your current setup</p><span>02</span><p>Plan the right configuration</p></div>
          <div className="welcome-modal__actions">
            <Link className="button button--primary" href="/tally-prime-software-abu-dhabi/e-invoicing-uae-abu-dhabi" onClick={dismiss}>Check your readiness <b aria-hidden="true">→</b></Link>
            <a className="welcome-modal__secondary" href="https://wa.me/971528209231?text=Hello%20XOFOZ%2C%20I%20would%20like%20a%20UAE%20e-Invoicing%20readiness%20assessment." target="_blank" rel="noreferrer" onClick={dismiss}>Talk to an expert <b aria-hidden="true">↗</b></a>
          </div>
          <small>XOFOZ can prepare your TallyPrime environment. Regulated invoice exchange remains with your appointed Accredited Service Provider.</small>
        </div>
      </section>
    </div>
  );
}
