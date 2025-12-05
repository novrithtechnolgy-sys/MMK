"use client";


import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Model({ position = [0, 0, 0], scale = 1 }) {
  const { scene } = useGLTF("/Farm house.glb");
  const ref = useRef<THREE.Object3D>(null);

  // 🔒 Lock Z rotation (prevents model tilting)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z = 0;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={scale}
    />
  );
}

export default function ThreeDHouse() {
  return (
    <div className="flex justify-center w-full h-[500px] items-center rounded-2xl bg-transparent border border-1 md:border-2 border-orange-400">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Model position={[0, -1.5, 0]} scale={0.2} />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0}

          // keeps rotation only in XY plane
          enablePan={false}

          minPolarAngle={0}
          maxPolarAngle={Math.PI}

          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
        />

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
