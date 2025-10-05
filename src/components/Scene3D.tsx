import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense } from "react";

const FloatingOrb = ({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={3}>
      <Sphere args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.6}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.2}
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
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#C084FC" />
        <pointLight position={[-10, -10, -5]} intensity={0.8} color="#60A5FA" />
        <pointLight position={[5, 5, 2]} intensity={0.6} color="#F472B6" />
        
        <FloatingOrb position={[-4, 2, -2]} color="#8B5CF6" scale={1.5} />
        <FloatingOrb position={[4, -2, -3]} color="#60A5FA" scale={1.2} />
        <FloatingOrb position={[0, 3, -5]} color="#EC4899" scale={1.3} />
        <FloatingOrb position={[-3, -3, -4]} color="#A78BFA" scale={1} />
        <FloatingOrb position={[3, 1, -4]} color="#F472B6" scale={0.9} />
        <FloatingOrb position={[-2, -2, -6]} color="#818CF8" scale={1.1} />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Suspense>
    </Canvas>
  );
};
