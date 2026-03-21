import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { useTheme } from './context/ThemeContext';
import CanvasLoader from './components/Loader';

const PaintBlob = () => {
  const { activeColor } = useTheme();
  
  return (
    <mesh>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color={activeColor}
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>
    </mesh>
  );
};

const HeroCanvas = () => {
  return (
    <div className="w-full h-screen absolute inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} enablePan={false} />
          <PaintBlob />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
