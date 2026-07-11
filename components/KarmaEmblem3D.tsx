"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function drawMercuryKarma(
  context: CanvasRenderingContext2D,
  size: number,
  time: number,
  melt: number
) {
  const center = size / 2;
  const radius = size * 0.42;
  const glow = Math.sin(time * 0.018) * 0.5 + 0.5;
  const liquidShift = Math.sin(time * 0.03) * radius * 0.08 * melt;

  context.clearRect(0, 0, size, size);

  context.save();
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2);
  context.clip();

  const dark = context.createLinearGradient(
    center - radius,
    center - radius,
    center + radius,
    center + radius
  );
  dark.addColorStop(0, "#061225");
  dark.addColorStop(0.42, "#0b3f96");
  dark.addColorStop(0.7, "#020817");
  dark.addColorStop(1, "#1b76e8");

  context.fillStyle = dark;
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2);
  context.fill();

  const mercury = context.createRadialGradient(
    center - radius * 0.32 + liquidShift,
    center - radius * 0.52 - liquidShift * 0.4,
    radius * 0.08,
    center - radius * 0.18,
    center - radius * 0.1,
    radius * 1.18
  );
  mercury.addColorStop(0, "#ffffff");
  mercury.addColorStop(0.24, "#eaf4ff");
  mercury.addColorStop(0.48, "#aab7c8");
  mercury.addColorStop(0.72, "#f8fbff");
  mercury.addColorStop(1, "#7f91a8");

  context.fillStyle = mercury;
  context.beginPath();
  context.arc(center, center, radius, Math.PI / 2, (3 * Math.PI) / 2);
  context.closePath();
  context.fill();

  context.beginPath();
  context.arc(center, center - radius / 2, radius / 2, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = dark;
  context.beginPath();
  context.arc(center, center + radius / 2, radius / 2, 0, Math.PI * 2);
  context.fill();

  const bandOffset = ((time * (1.6 + melt * 1.4)) % size) - size * 0.5;
  const shine = context.createLinearGradient(
    bandOffset,
    center - radius,
    bandOffset + size * 0.34,
    center + radius
  );
  shine.addColorStop(0, "rgba(255,255,255,0)");
  shine.addColorStop(0.44, `rgba(255,255,255,${0.14 + glow * 0.12})`);
  shine.addColorStop(0.5, `rgba(57,210,255,${0.12 + glow * 0.1})`);
  shine.addColorStop(0.58, "rgba(255,255,255,0.08)");
  shine.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = shine;
  context.fillRect(0, 0, size, size);

  if (melt > 0.01) {
    const ripple = context.createRadialGradient(
      center + Math.sin(time * 0.035) * radius * 0.3,
      center + Math.cos(time * 0.026) * radius * 0.28,
      radius * 0.08,
      center,
      center,
      radius * 0.98
    );
    ripple.addColorStop(0, `rgba(255,255,255,${0.18 * melt})`);
    ripple.addColorStop(0.42, `rgba(57,210,255,${0.12 * melt})`);
    ripple.addColorStop(0.68, "rgba(255,255,255,0)");
    context.fillStyle = ripple;
    context.fillRect(0, 0, size, size);
  }

  context.fillStyle = "#020817";
  context.beginPath();
  context.arc(center, center - radius / 2, radius * 0.115, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#f8fbff";
  context.beginPath();
  context.arc(center, center + radius / 2, radius * 0.115, 0, Math.PI * 2);
  context.fill();

  context.restore();

  const rim = context.createLinearGradient(
    center - radius,
    center - radius,
    center + radius,
    center + radius
  );
  rim.addColorStop(0, "#eaf4ff");
  rim.addColorStop(0.24, "#7f91a8");
  rim.addColorStop(0.5, "#ffffff");
  rim.addColorStop(0.76, "#0b3f96");
  rim.addColorStop(1, "#39d2ff");
  context.lineWidth = size * 0.018;
  context.strokeStyle = rim;
  context.beginPath();
  context.arc(center, center, radius, 0, Math.PI * 2);
  context.stroke();

  context.lineWidth = size * 0.006;
  context.strokeStyle = `rgba(57, 210, 255, ${0.36 + glow * 0.18})`;
  context.beginPath();
  context.arc(center, center, radius * 1.06, 0, Math.PI * 2);
  context.stroke();
}

export default function KarmaEmblem3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 1024;
    textureCanvas.height = 1024;
    const textureContext = textureCanvas.getContext("2d");
    if (!textureContext) return;

    const texture = new THREE.CanvasTexture(textureCanvas);
    texture.anisotropy = 8;
    texture.colorSpace = THREE.SRGBColorSpace;

    const group = new THREE.Group();
    scene.add(group);

    const faceGeometry = new THREE.PlaneGeometry(3.35, 3.35, 120, 120);
    const facePositions = faceGeometry.attributes.position as THREE.BufferAttribute;
    const baseFacePositions = Float32Array.from(facePositions.array);

    const face = new THREE.Mesh(
      faceGeometry,
      new THREE.MeshPhysicalMaterial({
        map: texture,
        metalness: 0.86,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        reflectivity: 0.8,
        transparent: true,
        side: THREE.DoubleSide,
      })
    );
    group.add(face);

    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(1.56, 0.035, 20, 180),
      new THREE.MeshPhysicalMaterial({
        color: 0xeaf4ff,
        metalness: 1,
        roughness: 0.12,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
      })
    );
    rim.position.z = 0.035;
    group.add(rim);

    const outerGlow = new THREE.Mesh(
      new THREE.TorusGeometry(1.72, 0.008, 12, 180),
      new THREE.MeshBasicMaterial({
        color: 0x39d2ff,
        transparent: true,
        opacity: 0.48,
      })
    );
    outerGlow.position.z = -0.08;
    group.add(outerGlow);

    const ambient = new THREE.AmbientLight(0xffffff, 1.3);
    const key = new THREE.PointLight(0x39d2ff, 2.8, 8);
    key.position.set(2.6, 2.4, 3.4);
    const fill = new THREE.PointLight(0x1b76e8, 1.5, 8);
    fill.position.set(-2.4, -1.6, 2.8);
    const white = new THREE.PointLight(0xffffff, 1.25, 8);
    white.position.set(-1.2, 2.8, 3.8);
    scene.add(ambient, key, fill, white);

    let width = 1;
    let height = 1;
    let frame = 0;
    let animationId = 0;
    let currentMelt = 0;
    let targetMelt = 0;
    let pointerX = 0;
    let pointerY = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const rect = mount.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      group.scale.setScalar(width < 720 ? 0.82 : 0.96);
    };

    const updateMeltTarget = (clientX: number, clientY: number) => {
      const rect = mount.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const radiusPx = Math.min(rect.width, rect.height) * 0.34;
      const distance = Math.hypot(clientX - centerX, clientY - centerY);

      pointerX = (clientX - centerX) / radiusPx;
      pointerY = (clientY - centerY) / radiusPx;
      targetMelt = Math.max(0, Math.min(1, 1 - distance / radiusPx));
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateMeltTarget(event.clientX, event.clientY);
    };

    const handlePointerLeave = () => {
      targetMelt = 0;
    };

    const deformFace = () => {
      const time = frame * 0.05;
      const melt = reduced ? 0 : currentMelt;

      for (let index = 0; index < facePositions.count; index += 1) {
        const sourceIndex = index * 3;
        const baseX = baseFacePositions[sourceIndex];
        const baseY = baseFacePositions[sourceIndex + 1];
        const baseZ = baseFacePositions[sourceIndex + 2];
        const distance = Math.hypot(baseX, baseY);
        const angle = Math.atan2(baseY, baseX);
        const edge = Math.min(1, distance / 1.67);
        const influence = Math.pow(Math.max(0, 1 - edge * 0.54), 1.4);
        const pointerPull = Math.max(
          0,
          1 - Math.hypot(baseX - pointerX * 0.9, baseY + pointerY * 0.9) / 1.35
        );
        const wave =
          Math.sin(angle * 5 + time * 1.8) * 0.055 +
          Math.sin(distance * 8.5 - time * 2.4) * 0.045;
        const drip =
          Math.max(0, -baseY / 1.67) *
          Math.sin(angle * 3 - time * 1.6) *
          0.12;
        const stretch = melt * (wave * influence + drip + pointerPull * 0.11);

        facePositions.setXYZ(
          index,
          baseX + Math.cos(angle) * stretch,
          baseY + Math.sin(angle) * stretch - pointerPull * melt * 0.07,
          baseZ + (wave * 2.8 + pointerPull * 0.22) * melt
        );
      }

      facePositions.needsUpdate = true;
      faceGeometry.computeVertexNormals();
    };

    const animate = () => {
      frame += 1;
      currentMelt += (targetMelt - currentMelt) * 0.035;
      drawMercuryKarma(textureContext, textureCanvas.width, frame, currentMelt);
      texture.needsUpdate = true;
      deformFace();

      if (!reduced) {
        const liquidLean = currentMelt * 0.14;
        group.rotation.y = Math.sin(frame * 0.007) * 0.16 + pointerX * liquidLean;
        group.rotation.x = Math.cos(frame * 0.006) * 0.07 - pointerY * liquidLean;
        group.rotation.z += 0.0013 + currentMelt * 0.0015;
        rim.scale.set(
          1 + Math.sin(frame * 0.09) * currentMelt * 0.052,
          1 + Math.cos(frame * 0.08) * currentMelt * 0.064,
          1
        );
        outerGlow.scale.setScalar(1 + currentMelt * 0.14);
        outerGlow.rotation.z -= 0.006;
      }

      renderer.render(scene, camera);
      animationId = window.requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      texture.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const material = object.material;
          if (Array.isArray(material)) {
            material.forEach((item) => item.dispose());
          } else {
            material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div className="karma-emblem-3d" ref={mountRef} aria-hidden="true">
      <div className="karma-emblem-fallback karma-emblem-fallback--mercury">
        <span className="mercury-half mercury-half--light" />
        <span className="mercury-half mercury-half--dark" />
        <span className="mercury-dot mercury-dot--dark" />
        <span className="mercury-dot mercury-dot--light" />
      </div>
    </div>
  );
}
