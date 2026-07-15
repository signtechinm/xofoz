import type { CSSProperties } from "react";

const clients = [
  { name: "Marriott International", logo: "/clients/marriott.svg", inverse: true },
  { name: "Sobha Realty", logo: "/clients/sobha.svg", inverse: true },
  { name: "Agility", logo: "/clients/agility.svg" },
  { name: "National Holding", logo: "/clients/national-holding.png", inverse: true },
  { name: "Altrad", logo: "/clients/altrad.jpg" },
  { name: "China Harbour Engineering Company", logo: "/clients/china-harbour.png" },
  { name: "Exeed Industries", logo: "/clients/exeed.png" },
  { name: "Cleanco", logo: "/clients/cleanco.png" },
  { name: "Bloom Holding", logo: "/clients/bloom.jpg" },
  { name: "Khadamat", logo: "/clients/khadamat.png" },
];

const streaks = [
  [8, 4, 150, 1.8, -1.2, "blue"],
  [31, 1, 92, 1.2, -3.8, "blue"],
  [68, 8, 118, 2.1, -5.1, "white"],
  [84, 22, 82, 1.4, -2.4, "blue"],
  [16, 38, 104, 1.6, -6.2, "white"],
  [54, 43, 138, 2.2, -0.7, "blue"],
  [76, 55, 96, 1.3, -4.5, "white"],
  [3, 67, 126, 1.9, -2.9, "blue"],
  [39, 72, 86, 1.2, -5.8, "blue"],
  [63, 81, 154, 2.3, -1.8, "white"],
  [88, 69, 112, 1.6, -6.8, "blue"],
  [24, 91, 72, 1.1, -3.3, "white"],
] as const;

export default function ClientLogoSection() {
  return (
    <section className="client-section" aria-labelledby="client-section-title">
      <div className="client-light-streaks" aria-hidden="true">
        {streaks.map(([left, top, length, thickness, delay, tone], index) => (
          <span
            className={`client-light-streak client-light-streak--${tone}`}
            key={index}
            style={{
              "--streak-left": `${left}%`,
              "--streak-top": `${top}%`,
              "--streak-length": `${length}px`,
              "--streak-thickness": `${thickness}px`,
              "--streak-delay": `${delay}s`,
            } as CSSProperties}
          />
        ))}
      </div>
      <div className="page-band client-section__inner">
        <div className="client-section__heading">
          <span className="eyebrow">Trusted Partnerships</span>
          <h2 id="client-section-title">Trusted by businesses across the UAE.</h2>
        </div>
        <div className="client-logo-grid">
          {clients.map((client) => (
            <div
              className={`client-logo${client.inverse ? " client-logo--inverse" : ""}${client.name === "Cleanco" ? " client-logo--cleanco" : ""}${client.name === "China Harbour Engineering Company" ? " client-logo--china-harbour" : ""}`}
              key={client.name}
              title={client.name}
            >
              <img src={client.logo} alt={`${client.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
