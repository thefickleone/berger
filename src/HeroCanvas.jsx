import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, Float } from '@react-three/drei';
import { useTheme } from './context/ThemeContext';

import CanvasLoader from './components/Loader';
import ErrorBoundary from './components/ErrorBoundary';

const ComputerModel = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  const { activeColor } = useTheme();

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      {/* This invisible mesh applies the activeColor to the scene logic */}
      <meshStandardMaterial color={activeColor} />
    </mesh>
  );
};

const FallbackBox = () => {
  const { activeColor } = useTheme();
  return (
    <mesh scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={activeColor} />
    </mesh>
  );
};

useGLTF.preload('/desktop_pc/scene.gltf');

const HeroCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <ErrorBoundary>
      <div className="w-full h-screen">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: isMobile ? [15, 3, 5] : [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
          performance={{ min: 0.5 }}
        >
          {/* Changed fallback to FallbackBox for better UX */}
          <Suspense fallback={<FallbackBox />}>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
               <ComputerModel isMobile={isMobile} />
            </Float>
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
    </ErrorBoundary>
  );
};

export default HeroCanvas;