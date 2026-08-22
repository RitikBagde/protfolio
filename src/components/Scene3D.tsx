"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { gsap, createContext } from "@/lib/gsap";

const count = 20000;

function generatePositions(): THREE.Vector3[] {
  const pos: THREE.Vector3[] = [];
  for (let i = 0; i < count; i++) {
    pos.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
      ),
    );
  }
  return pos;
}

const ParticleSwarm = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const speedMult = 1;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  const color = pColor;

  const positions = useMemo(() => generatePositions(), []);

  const material = useMemo(
    () => new THREE.MeshBasicMaterial({ color: 0x475569, transparent: true, opacity: 0.85 }),
    [],
  );
  const geometry = useMemo(() => new THREE.TetrahedronGeometry(0.25), []);

  const PARAMS = useMemo(
    () => ({ scale: 23.6, field: 4.6, speed: 0.345, flare: 100, hue: 0, sat: 0 }),
    [],
  );
  const addControl = (id: string, _l: string, _min: number, _max: number, val: number) => {
    return PARAMS[id as keyof typeof PARAMS] !== undefined
      ? PARAMS[id as keyof typeof PARAMS]
      : val;
  };

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;

    for (let i = 0; i < count; i++) {
      const scale = addControl("scale", "Sun Radius", 20, 200, 80);
      const fieldStrength = addControl("field", "Magnetic Field Size", 1, 10, 5);
      const flowSpeed = addControl("speed", "Plasma Flow Speed", 0.1, 5.0, 1.5);
      const flareIntensity = addControl("flare", "Solar Flare Intensity", 0, 100, 0);
      const hueShift = addControl("hue", "Color Spectrum (RGB)", 0, 1, 0.6);
      const saturation = addControl("sat", "Saturation", 0, 1, 0);

      const safeCount = count > 0 ? count : 1;
      const n = i / safeCount;
      const t = time * flowSpeed;

      let px, py, pz;
      let hue, sat, lit;

      const group = n * 3.0;

      if (group < 1.0) {
        const idx = i;
        const maxIdx = safeCount / 3;
        const normIdx = idx / maxIdx;

        const phi = Math.acos(1 - 2 * normIdx);
        const theta = Math.PI * (1 + Math.sqrt(5)) * idx;

        const surfaceBoil = Math.sin(phi * 10 + t * 2) * Math.cos(theta * 10 + t * 2.5) * (scale * 0.05);
        const r = scale + surfaceBoil;

        px = r * Math.sin(phi) * Math.cos(theta);
        py = r * Math.sin(phi) * Math.sin(theta);
        pz = r * Math.cos(phi);

        hue = hueShift;
        sat = saturation;
        lit = 0.6 + (surfaceBoil > 0 ? 0.3 : 0.0);
      } else if (group < 2.0) {
        const localN = group - 1.0;
        const numLines = 50;
        const lineId = Math.floor(localN * numLines);
        const posOnLine = localN * numLines - lineId;

        const flowPos = (posOnLine + t * 0.2) % 1.0;
        const lineAngle = (lineId / numLines) * Math.PI * 2.0;

        const minTheta = 0.1;
        const maxTheta = Math.PI - 0.1;
        const polarAngle = minTheta + flowPos * (maxTheta - minTheta);

        const shellLevel = (lineId % 5) / 5;
        const L = scale * 1.2 + shellLevel * scale * fieldStrength;
        const r = L * Math.pow(Math.sin(polarAngle), 2);
        const finalR = Math.max(r, scale * 1.01);

        px = finalR * Math.sin(polarAngle) * Math.cos(lineAngle);
        pz = finalR * Math.sin(polarAngle) * Math.sin(lineAngle);
        py = finalR * Math.cos(polarAngle);

        hue = hueShift;
        sat = saturation;
        lit = 0.8 * (1.0 - finalR / (scale * fieldStrength * 1.5));
      } else {
        const localN = group - 2.0;
        const numFlares = 30;
        const flareId = Math.floor(localN * numFlares);
        const posOnFlare = localN * numFlares - flareId;

        const flowPos = (posOnFlare + t * 0.5) % 1.0;
        const angleOffset = (flareId / numFlares) * Math.PI * 2.0;

        const basePhi = flareId % 3 === 0 ? 0.1 : flareId % 3 === 1 ? Math.PI - 0.1 : Math.PI / 2;
        const spread = (flareId % 5) / 5 * 0.5;
        const polarAngle = basePhi + spread * Math.sin(flareId * 13.37);

        const r = scale + flowPos * scale * flareIntensity;
        const wiggleAmount = flowPos * scale * 0.2;
        const wiggleX = Math.sin(flowPos * 10 + t * 5 + flareId) * wiggleAmount;
        const wiggleZ = Math.cos(flowPos * 10 + t * 5 + flareId) * wiggleAmount;

        px = r * Math.sin(polarAngle) * Math.cos(angleOffset) + wiggleX;
        pz = r * Math.sin(polarAngle) * Math.sin(angleOffset) + wiggleZ;
        py = r * Math.cos(polarAngle);

        hue = hueShift;
        sat = saturation;
        lit = (1.0 - flowPos) * (1.0 - flowPos);
      }

      const rotY = time * 0.1;
      const cy = Math.cos(rotY);
      const sy = Math.sin(rotY);

      const finalX = px * cy + pz * sy;
      const finalZ = -px * sy + pz * cy;

      target.set(finalX, py, finalZ);
      color.setHSL(hue % 1.0, Math.min(1.0, Math.max(0, sat)), Math.min(1.0, Math.max(0.01, lit)));

      positions[i].lerp(target, 0.1);
      dummy.position.copy(positions[i]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return <instancedMesh ref={meshRef} args={[geometry, material, count]} />;
};

export function Scene3D({
  fadeTriggerRef,
}: {
  fadeTriggerRef?: React.RefObject<HTMLElement | null>;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const helper = createContext(wrapperRef.current);
    const ctx = helper.run(() => {
      gsap.set(wrapperRef.current, { opacity: 1 });

      gsap.timeline({
        scrollTrigger: {
          trigger: fadeTriggerRef?.current ?? wrapperRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }).to(wrapperRef.current, {
        opacity: 0,
        duration: 0.5,
      });
    });

    return () => ctx.revert();
  }, [fadeTriggerRef]);

  return (
    <div ref={wrapperRef} className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 100], fov: 60 }}
        style={{ position: "absolute", inset: 0 }}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
      >
        <fog attach="fog" args={["#f8fafc", 0.002]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} />
        <ParticleSwarm />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
