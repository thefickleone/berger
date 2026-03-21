import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Float } from '@react-three/drei';

import CanvasLoader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';

const ComputerModel = () => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Fallback component if the 3D model fails to load
const FallbackBox = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#2196F3" />
  </mesh>
);

useGLTF.preload('/desktop_pc/scene.gltf');

const HeroCanvas = () => {
  return (
    <ErrorBoundary>
      <div className="w-full h-screen">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
          performance={{ min: 0.5 }} // Added performance optimization
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
               <ComputerModel />
            </Float>
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </ErrorBoundary>
  );
};

export default HeroCanvas;