import type { Metadata } from "next";
import TallyEInvoicingPage from "../../../components/TallyEInvoicingPage";

export const metadata: Metadata = {
  title: { absolute: "UAE e-Invoicing with TallyPrime | Abu Dhabi Setup Help" },
  description: "Prepare for UAE e-Invoicing with TallyPrime 7.1. Get Abu Dhabi-based readiness assessment, configuration, ASP guidance, testing and staff training.",
  alternates: { canonical: "/tally-prime-software-abu-dhabi/e-invoicing-uae-abu-dhabi" },
  openGraph: {
    type: "website",
    url: "/tally-prime-software-abu-dhabi/e-invoicing-uae-abu-dhabi",
    title: "UAE e-Invoicing with TallyPrime | Abu Dhabi Setup Help",
    description: "TallyPrime e-Invoicing readiness assessment, configuration, testing, training, and support for Abu Dhabi businesses.",
    images: [{ url: "/solutions/tally-prime/e-invoicing/uae-e-invoicing-readiness-abu-dhabi.png", width: 1024, height: 1536, alt: "UAE e-Invoicing readiness support for Abu Dhabi businesses" }],
  },
};

export default function Page() {
  return <TallyEInvoicingPage />;
}
