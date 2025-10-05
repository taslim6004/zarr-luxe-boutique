import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense } from "react";

const FloatingOrb = ({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FFD700" />
        
        <FloatingOrb position={[-4, 2, -2]} color="#9333EA" scale={1.2} />
        <FloatingOrb position={[4, -2, -3]} color="#FFD700" scale={0.8} />
        <FloatingOrb position={[0, 3, -5]} color="#A855F7" scale={1} />
        <FloatingOrb position={[-3, -3, -4]} color="#FCD34D" scale={0.9} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
};
