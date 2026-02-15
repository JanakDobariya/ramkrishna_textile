/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// Augment the global JSX namespace to include React Three Fiber elements
// and custom elements.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      planeGeometry: any;
      meshPhysicalMaterial: any;
      meshStandardMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      torusGeometry: any;
      fog: any;
    }
  }
}

const ClothMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      // Gentle floating rotation
      meshRef.current.rotation.x = -Math.PI / 4 + Math.cos(t * 0.2) * 0.05;
      meshRef.current.rotation.y = Math.sin(t * 0.1) * 0.05;
      
      // We can also animate the position slightly
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    }
  });

  // Create a wavy plane geometry
  // We'll rely on the material distortion or a simple displacement in vertex shader if we want
  // But for simplicity, let's use a high segment plane and just let the lighting do the work
  // with a nice texture or physical material
  
  return (
    <mesh ref={meshRef} position={[0, 0, 0]} rotation={[-Math.PI / 3, 0, 0]}>
      <planeGeometry args={[15, 15, 64, 64]} />
      <meshPhysicalMaterial 
        color="#fdfbf7" 
        roughness={0.4}
        metalness={0.1}
        clearcoat={0.1}
        clearcoatRoughness={0.4}
        side={THREE.DoubleSide}
        wireframe={false}
      />
    </mesh>
  );
};

// A more dynamic cloth simulation using vertex manipulation
const FlowingFabric = () => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
        const time = clock.getElapsedTime();
        const geometry = mesh.current.geometry;
        const positionAttribute = geometry.attributes.position;
        
        // Simple wave simulation
        for (let i = 0; i < positionAttribute.count; i++) {
            const x = positionAttribute.getX(i);
            const y = positionAttribute.getY(i);
            
            // Calculate wave height based on x, y and time
            const z = 0.5 * Math.sin(x * 0.5 + time) * Math.cos(y * 0.3 + time * 0.8) 
                    + 0.2 * Math.sin(x * 1.5 + time * 0.5);
            
            positionAttribute.setZ(i, z);
        }
        positionAttribute.needsUpdate = true;
        geometry.computeVertexNormals();
    }
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -2]}>
      <planeGeometry args={[20, 20, 50, 50]} />
      <meshStandardMaterial 
        color="#F0EAD6" // Silk/Cream color
        roughness={0.4}
        metalness={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <spotLight 
            position={[10, 10, 10]} 
            angle={0.3} 
            penumbra={1} 
            intensity={1.5} 
            color="#fff" 
            castShadow 
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#C5A059" />
        
        <FlowingFabric />
        
        {/* Abstract golden threads */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[4, 2, -2]}>
                <torusGeometry args={[1, 0.02, 16, 100]} />
                <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.1} />
            </mesh>
             <mesh position={[-4, -1, -3]} rotation={[1, 1, 0]}>
                <torusGeometry args={[1.5, 0.01, 16, 100]} />
                <meshStandardMaterial color="#C5A059" metalness={1} roughness={0.1} />
            </mesh>
        </Float>

        <Environment preset="city" />
        {/* Soft fog to blend the edges */}
        <fog attach="fog" args={['#F9F8F4', 5, 20]} />
      </Canvas>
    </div>
  );
};

// Exporting a dummy component to satisfy imports if any leftovers exist, 
// though we will likely not use QuantumComputerScene in the new App.
export const QuantumComputerScene: React.FC = () => {
    return null;
}