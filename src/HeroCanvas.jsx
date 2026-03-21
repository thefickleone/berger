import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleField = ({ color }) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(3000), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const PaintOrb = ({ color }) => {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={window.innerWidth < 768 ? 0.35 : 0.5}>
        <MeshDistortMaterial
          color={color}
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.8}
          roughness={0.1}
        />
      </Sphere>
    </Float>
  );
};

const HeroCanvas = ({ activeColor }) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color={activeColor} intensity={1} />
        
        <PaintOrb color={activeColor} />
        <ParticleField color={activeColor} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;