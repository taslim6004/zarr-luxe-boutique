import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Box, MeshReflectorMaterial } from "@react-three/drei";
import { Suspense } from "react";

const ProductBox = () => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box args={[2, 2, 2]}>
        <MeshReflectorMaterial
          color="#9333EA"
          roughness={0.1}
          metalness={0.9}
          mirror={0.5}
        />
      </Box>
    </Float>
  );
};

export const Product3D = () => {
  return (
    <div className="w-full h-64 relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FFD700" />
          
          <ProductBox />
          
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Suspense>
      </Canvas>
    </div>
  );
};
