"use client";

import Script from "next/script";

export default function DidAgent() {
  // Keep the optional third-party widget from breaking local/offline builds.
  // Enable it explicitly with NEXT_PUBLIC_ENABLE_DID_AGENT=true.
  if (process.env.NEXT_PUBLIC_ENABLE_DID_AGENT !== "true") {
    return null;
  }

  return (
    <Script
      id="did-agent"
      type="module"
      src="https://agent.d-id.com/v2/index.js"
      strategy="afterInteractive"
      data-mode="fabio"
      data-client-key="ck_BdXz8lBMfbuu79Ymf4XWb"
      data-agent-id="v2_agt_IGX7YVU0"
      data-name="did-agent"
      data-monitor="true"
      data-orientation="horizontal"
      data-position="right"
      data-open-mode="compact"
    />
  );
}
