import React from 'react';
import { OrbitControls } from '@react-three/drei';
import Pyramid from './Pyramid';
import Lighting from './Lighting';

function Scene() {
  return (
    <>
      {/* Controles de cámara */}
      <OrbitControls 
        enablePan={true} 
        enableZoom={true} 
        enableRotate={true}
        maxDistance={15}
        minDistance={3}
      />
      
      {/* Iluminación */}
      <Lighting />
      
      {/* Pirámide escalonada */}
      <Pyramid />
      
      {/* Plano base con textura procedural */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial 
          color="#2a2a2a" 
          roughness={0.9}
          metalness={0.0}
          envMapIntensity={0.1}
        />
      </mesh>
    </>
  );
}

export default Scene;
