"use client";

export default function SolutionEnquiryButton({ solution }: { solution: string }) {
  function selectSolution() {
    window.dispatchEvent(new CustomEvent("xofoz:solution-selected", { detail: solution }));
    document.getElementById("solution-consultation")?.scrollIntoView({ behavior: "smooth" });
  }

  return <button className="solution-card__action" type="button" onClick={selectSolution}>Enquire now <span aria-hidden="true">→</span></button>;
}
