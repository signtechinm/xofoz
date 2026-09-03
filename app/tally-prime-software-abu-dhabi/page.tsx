import type { Metadata } from "next";
import TallyPrimePage from "../../components/TallyPrimePage";

export const metadata: Metadata = {
  title: { absolute: "TallyPrime Software Abu Dhabi | Sales, Support & AMC" },
  description: "Authorized TallyPrime dealer in Abu Dhabi for all industries. Sales, implementation, customization, AMC support and e-Invoicing setup from XOFOZ.",
  alternates: { canonical: "/tally-prime-software-abu-dhabi" },
  openGraph: {
    type: "website",
    url: "/tally-prime-software-abu-dhabi",
    title: "TallyPrime Software Abu Dhabi | Sales, Support & AMC",
    description: "TallyPrime licensing, implementation, customization, training, migration, AMC support and e-Invoicing readiness from XOFOZ in Abu Dhabi.",
    images: [{ url: "/solutions/tally-prime/tallyprime-accounting-abu-dhabi.png", width: 1536, height: 1024, alt: "TallyPrime accounting services from XOFOZ in Abu Dhabi" }],
  },
};

export default function Page() {
  return <TallyPrimePage />;
}
