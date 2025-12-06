// "use client";

// import * as THREE from "three";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
// import { useRef, useEffect, useState } from "react";

// // 📌 Model Component
// function Model({ position = [0, 0, 0], scale = 1 }) {
//   const { scene } = useGLTF("/Farm house.glb");
//   const ref = useRef<THREE.Object3D>(null);

//   useFrame(() => {
//     if (ref.current) ref.current.rotation.z = 0;
//   });

//   return <primitive ref={ref} object={scene} position={position} scale={scale} />;
// }

// // 📌 Main Component
// export default function ThreeDHouse() {
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect screen size
//   useEffect(() => {
//     const check = () => setIsMobile(window.innerWidth < 768); // md breakpoint
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);

//   return (
//     <div className="flex justify-center w-full h-[400px] md:h-[580px] items-center rounded-2xl bg-white border border-1 md:border-2 border-orange-400">
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.2} />
//         <directionalLight position={[5, 5, 5]} intensity={2} />

//         {/* ⭐ Different scale for mobile vs desktop */}
//         <Model
//           position={[0, -1.5, 0]}
//           scale={isMobile ? 0.16 : 0.2} // <— change values here
//         />

//         <OrbitControls
//           enableZoom={false}
//           autoRotate
//           autoRotateSpeed={0}
//           enablePan={false}
//           minPolarAngle={0}
//           maxPolarAngle={Math.PI}
//         />

//         <Environment preset="sunset" />
//       </Canvas>
//     </div>
//   );
// }


"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

// 📌 3D Model Component
function Model({ position = [0, 0, 0], scale = 1, useGyro = false }) {
  const { scene } = useGLTF("/Farm house.glb");
  const ref = useRef<THREE.Object3D>(null);

  // Gyroscope state
  const gyro = useRef({ alpha: 0, beta: 0 });

  // Enable device orientation on mobile
  useEffect(() => {
    if (!useGyro) return;

    const handler = (e: DeviceOrientationEvent) => {
      gyro.current.alpha = e.alpha || 0; // Left–Right
      gyro.current.beta = e.beta || 0; // Up–Down
    };

    window.addEventListener("deviceorientation", handler, true);

    return () => window.removeEventListener("deviceorientation", handler);
  }, [useGyro]);

  useFrame(() => {
    if (!ref.current) return;

    // Lock Z axis always
    ref.current.rotation.z = 0;

    // 📱 Apply gyro rotation only on mobile
    if (useGyro) {
      ref.current.rotation.y = THREE.MathUtils.degToRad(gyro.current.alpha) * 0.8;
      ref.current.rotation.x = THREE.MathUtils.degToRad(gyro.current.beta) * 0.4;
    }
  });

  return (
    <primitive ref={ref} object={scene} position={position} scale={scale} />
  );
}

// 📌 Main Component
export default function ThreeDHouse() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="flex justify-center w-full h-[400px] md:h-[580px] items-center rounded-2xl bg-white border border-1 md:border-2 border-orange-400">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Model
          position={[0, -1.5, 0]}
          scale={isMobile ? 0.16 : 0.2}
          useGyro={isMobile}   // ⭐ Only mobile uses gyroscope
        />

        {/* Desktop → Keep Orbit Controls */}
        {!isMobile && (
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0}
            enablePan={false}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
          />
        )}

        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
