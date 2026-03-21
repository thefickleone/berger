import React, { useRef, useMemo, Component } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

// NEW: Error Boundary Class Component
class CanvasErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-[#1a1a1a] flex items-center justify-center">
          <div className="w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
        </div>
      );
    }
    return this.props.children;
  }
}

const ParticleField = ({ color }) => {
  const ref = useRef();
  const sphere = useMemo(() => random.inSphere(new Float32Array(1500 * 3), { radius: 1.5 }), []);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial transparent color={color} size={0.004} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
      </Points>
    </group>
  );
};

const PaintOrb = ({ color }) => {
  const { viewport } = useThree();
  const responsiveScale = Math.min(viewport.width / 4, 0.5);
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} scale={responsiveScale}>
        <MeshDistortMaterial color={color} speed={2} distort={0.4} radius={1} metalness={0.9} roughness={0.1} />
      </Sphere>
    </Float>
  );
};

const HeroCanvas = ({ activeColor }) => {
  return (
    <div className="absolute inset-0 z-0">
      <CanvasErrorBoundary>
        <Canvas 
          camera={{ position: [0, 0, 1.5], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        >
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-5, -5, -5]} color={activeColor} intensity={1.5} />
          
          <PaintOrb color={activeColor} />
          <ParticleField color={activeColor} />
        </Canvas>
      </CanvasErrorBoundary>
    </div>
  );
};

export default HeroCanvas;