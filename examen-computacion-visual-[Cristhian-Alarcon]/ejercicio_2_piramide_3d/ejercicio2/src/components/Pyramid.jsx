import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function Pyramid() {
  const pyramidRef = useRef();

  // Animación de rotación suave
  useFrame((state) => {
    if (pyramidRef.current) {
      pyramidRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  // Función para crear una caja con material PBR mejorado
  const createBox = (position, size, color = '#ffffff', materialProps = {}) => (
    <mesh
      key={`box-${position.join('-')}`}
      position={position}
      castShadow
      receiveShadow
    >
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        roughness={materialProps.roughness || 0.8}
        metalness={materialProps.metalness || 0.1}
        envMapIntensity={0.5}
        // Simulamos variación de rugosidad para textura procedural
        transparent={false}
        opacity={1}
        {...materialProps}
      />
    </mesh>
  );

  return (
    <group ref={pyramidRef}>
      {/* Nivel 1 - Base (5x5) - Material más rugoso como piedra */}
      {Array.from({ length: 5 }, (_, i) =>
        Array.from({ length: 5 }, (_, j) =>
          createBox(
            [i * 1.1 - 2.2, -2, j * 1.1 - 2.2],
            [1, 1, 1],
            '#654321',
            { 
              roughness: 0.9, 
              metalness: 0.0,
              envMapIntensity: 0.2 
            }
          )
        )
      )}

      {/* Nivel 2 (4x4) - Material intermedio */}
      {Array.from({ length: 4 }, (_, i) =>
        Array.from({ length: 4 }, (_, j) =>
          createBox(
            [i * 1.1 - 1.65, -1, j * 1.1 - 1.65],
            [1, 1, 1],
            '#8B4513',
            { 
              roughness: 0.7, 
              metalness: 0.1,
              envMapIntensity: 0.3 
            }
          )
        )
      )}

      {/* Nivel 3 (3x3) - Material más pulido */}
      {Array.from({ length: 3 }, (_, i) =>
        Array.from({ length: 3 }, (_, j) =>
          createBox(
            [i * 1.1 - 1.1, 0, j * 1.1 - 1.1],
            [1, 1, 1],
            '#CD853F',
            { 
              roughness: 0.5, 
              metalness: 0.2,
              envMapIntensity: 0.4 
            }
          )
        )
      )}

      {/* Nivel 4 (2x2) - Material semi-metálico */}
      {Array.from({ length: 2 }, (_, i) =>
        Array.from({ length: 2 }, (_, j) =>
          createBox(
            [i * 1.1 - 0.55, 1, j * 1.1 - 0.55],
            [1, 1, 1],
            '#DAA520',
            { 
              roughness: 0.3, 
              metalness: 0.4,
              envMapIntensity: 0.6 
            }
          )
        )
      )}

      {/* Nivel 5 - Cima (1x1) - Material dorado brillante */}
      {createBox(
        [0, 2, 0], 
        [1, 1, 1], 
        '#FFD700',
        { 
          roughness: 0.1, 
          metalness: 0.8,
          envMapIntensity: 1.0,
          emissive: '#332200',
          emissiveIntensity: 0.1
        }
      )}
    </group>
  );
}

export default Pyramid;
