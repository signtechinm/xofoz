import { resolveProductBrandLogo } from "../data/product-brand-logos";

export default function ProductBrandMark({ brand, className = "" }: { brand: string; className?: string }) {
  const logo = resolveProductBrandLogo(brand);
  const darkLogo = brand.toLowerCase().includes("mobatime");

  return (
    <span className={`${className} product-brand-mark ${logo ? "has-logo" : ""} ${darkLogo ? "is-dark" : ""}`.trim()} title={brand}>
      {logo ? <img src={logo} alt={`${brand} logo`} /> : brand}
    </span>
  );
}
