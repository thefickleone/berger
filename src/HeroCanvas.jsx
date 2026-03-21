import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { useTheme } from './context/ThemeContext';
import CanvasLoader from './components/Loader';

const PaintBlob = () => {
  const { activeColor } = useTheme();
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial 
          color={activeColor} 
          attach="material" 
          distort={0.4} 
          speed={2} 
          roughness={0.1} 
          metalness={0.2} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
        />
      </Sphere>
    </Float>
  );
};

const HeroCanvas = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h1 className="text-6xl md:text-8xl font-black text-white/90 tracking-tighter mix-blend-overlay text-center uppercase">
          Experience <br/> True Color
        </h1>
      </div>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ preserveDrawingBuffer: true }} performance={{ min: 0.5 }}>
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          <PaintBlob />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default HeroCanvas;