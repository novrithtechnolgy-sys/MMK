"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

// 📌 Model Component
function Model({ position = [0, 0, 0], scale = 1 }) {
  const { scene } = useGLTF("/Farm house.glb");
  const ref = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (ref.current) ref.current.rotation.z = 0;
  });

  return <primitive ref={ref} object={scene} position={position} scale={scale} />;
}

// 📌 Main Component
export default function ThreeDHouse() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="flex justify-center w-full h-[460px] md:h-[580px] items-center rounded-2xl bg-white border border-1 md:border-2 border-orange-400">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* ⭐ Different scale for mobile vs desktop */}
        <Model
          position={[0, -1.5, 0]}
          scale={isMobile ? 0.12 : 0.2} // <— change values here
        />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
