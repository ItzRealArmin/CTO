"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function SpherePoints() {
  const reduced = useReducedMotion();
  const ref = useRef<THREE.Points>(null!);
  const count = 5000;

  const [positions] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const r = 1;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((_, delta) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={"#7c3aed"}
        size={0.01}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function Wireframe() {
  const geom = useMemo(() => new THREE.SphereGeometry(1.01, 32, 32), []);
  const mat = useMemo(() => new THREE.MeshBasicMaterial({ color: "#22d3ee", wireframe: true, transparent: true, opacity: 0.25 }), []);
  return <mesh geometry={geom} material={mat} />;
}

export default function Globe3D() {
  return (
    <div className="relative w-full h-[380px] md:h-[520px]">
      <Canvas camera={{ position: [0, 0, 2.6], fov: 50 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[2, 2, 2]} intensity={0.6} />
        <group>
          <SpherePoints />
          <Wireframe />
        </group>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
