"use client";

import { useEffect, useRef } from "react";

export default function PointerLight() {
  const lightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    const updateLight = (clientX: number, clientY: number) => {
      const rect = light.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      light.style.setProperty("--light-x", `${Math.max(0, Math.min(100, x))}%`);
      light.style.setProperty("--light-y", `${Math.max(0, Math.min(100, y))}%`);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = light.getBoundingClientRect();
      const isInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!isInside) return;

      updateLight(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      light.style.setProperty("--light-x", "50%");
      light.style.setProperty("--light-y", "18%");
    };

    updateLight(window.innerWidth / 2, window.innerHeight * 0.35);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    light.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      light.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return <div className="pointer-light" ref={lightRef} aria-hidden="true" />;
}
