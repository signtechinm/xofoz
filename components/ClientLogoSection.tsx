import type { CSSProperties } from "react";

const clients = [
  { name: "Stevin Rock", logo: "/clients/stevin-rock.jpg" },
  { name: "Hayatna", logo: "/clients/hayatna.jpg" },
  { name: "Abu Dhabi Sports Council", logo: "/clients/abu-dhabi-sports-council.png" },
  { name: "Altrad", logo: "/clients/altrad-presentation.jpg" },
  { name: "3t", logo: "/clients/3t.png", background: "#eeeb20" },
  { name: "Sobha Realty", logo: "/clients/sobha-presentation.jpg", background: "#477654" },
  { name: "Bloom Holding", logo: "/clients/bloom-presentation.jpg" },
  { name: "National Holding", logo: "/clients/national-holding-presentation.jpg" },
  { name: "Marriott International", logo: "/clients/marriott-presentation.png" },
  { name: "China Harbour Engineering Company", logo: "/clients/china-harbour-presentation.png" },
  { name: "KIZAD", logo: "/clients/kizad.png", background: "#2b3854" },
  { name: "Badminton World Federation", logo: "/clients/bwf.gif" },
  { name: "EDGE", logo: "/clients/edge.png" },
  { name: "NMC Healthcare", logo: "/clients/nmc.png" },
  { name: "Agility Engineering & Contracting", logo: "/clients/agility-engineering.jpg" },
  { name: "Al Bustan Medical Center", logo: "/clients/al-bustan-medical-center.jpg" },
  { name: "Emirates Food Industries", logo: "/clients/emirates-food-industries.jpg" },
  { name: "Exeed Precast", logo: "/clients/exeed-precast.jpg" },
  { name: "NDTCCS", logo: "/clients/ndtccs.jpg" },
  { name: "Scope Investment", logo: "/clients/scope-investment.jpg" },
  { name: "Siraj Finance", logo: "/clients/siraj-finance.jpg" },
  { name: "Hilalco", logo: "/clients/hilalco.png" },
  { name: "Al Ghazal Golf Club", logo: "/clients/al-ghazal-golf-club.png" },
  { name: "Al Taif", logo: "/clients/al-taif.jpg" },
  { name: "Itinera", logo: "/clients/itinera.png" },
  { name: "L'ETO London", logo: "/clients/leto-london.jpg" },
  { name: "Emaar", logo: "/clients/emaar.svg" },
  { name: "ADASI", logo: "/clients/adasi.svg" },
  { name: "Likhitha", logo: "/clients/likhitha.svg" },
  { name: "Aloft Hotels", logo: "/clients/aloft.svg" },
  { name: "Brighton College Abu Dhabi", logo: "/clients/brighton-college-abu-dhabi.svg" },
  { name: "Minar Holdings", logo: "/clients/minar-holdings.svg" },
  { name: "Ittihad International Investment LLC", logo: "/clients/ittihad-international-investment.svg" },
  { name: "Force 10", logo: "/clients/force-10.svg" },
  { name: "FAB Properties", logo: "/clients/fab-properties.svg" },
];

const clientLogoScales: Record<string, number> = {
  "Stevin Rock": 1.15,
  Hayatna: 1.18,
  "Abu Dhabi Sports Council": 1.65,
  "Sobha Realty": 1.1,
  "Bloom Holding": 1.18,
  "National Holding": 1.38,
  "China Harbour Engineering Company": 1.12,
  KIZAD: 1.48,
  EDGE: 1.24,
  "NMC Healthcare": 1.38,
  "Agility Engineering & Contracting": 1.5,
  "Al Bustan Medical Center": 1.72,
  "Emirates Food Industries": 1.22,
  "Exeed Precast": 1.45,
  NDTCCS: 1.12,
  "Scope Investment": 1.48,
  Hilalco: 1.34,
  "L'Arabia Hotel Apartments": 1.62,
  "Al Taif": 1.28,
};

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
          <span className="eyebrow">Client Experience</span>
          <h2 id="client-section-title">Trusted by leading businesses across the UAE.</h2>
        </div>
        <div className="client-logo-grid">
          {clients.map((client) => (
            <div
              className="client-logo"
              key={client.name}
              style={{
                "--client-logo-bg": client.background || "#ffffff",
                "--client-logo-scale": clientLogoScales[client.name] || 1,
              } as CSSProperties}
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
