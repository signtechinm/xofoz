"use client";

export default function ServiceCategoryEnquiryButton({
  category,
  subService,
}: {
  category: string;
  subService: string;
}) {
  function selectService() {
    window.dispatchEvent(
      new CustomEvent("xofoz:service-category-selected", {
        detail: { category, subService, source: "sub-service-card" },
      }),
    );
    document.getElementById("service-category-consultation")?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }

  return (
    <button
      className="solution-card__action"
      type="button"
      onClick={selectService}
      aria-label={`Enquire about ${subService}`}
    >
      Enquire now <span aria-hidden="true">→</span>
    </button>
  );
}
