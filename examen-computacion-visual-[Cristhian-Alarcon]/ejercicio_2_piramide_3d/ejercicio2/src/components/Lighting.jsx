import React from 'react';

function Lighting() {
  return (
    <>
      {/* Luz ambiental suave */}
      <ambientLight intensity={0.4} color="#ffffff" />
      
      {/* Luz direccional principal con sombras */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-15}
        shadow-camera-right={15}
        shadow-camera-top={15}
        shadow-camera-bottom={-15}
        shadow-bias={-0.0001}
      />
      
      {/* Luz puntual cálida para resaltar materiales */}
      <pointLight 
        position={[-8, 6, 8]} 
        intensity={0.8} 
        color="#ffaa44"
        distance={20}
        decay={2}
      />
      
      {/* Luz de relleno fría */}
      <pointLight 
        position={[8, 4, -8]} 
        intensity={0.5} 
        color="#4477ff"
        distance={15}
        decay={2}
      />
      
      {/* Luz cenital para el brillo dorado */}
      <spotLight
        position={[0, 15, 0]}
        target-position={[0, 2, 0]}
        intensity={0.6}
        color="#ffdd88"
        angle={Math.PI / 6}
        penumbra={0.5}
        distance={20}
        decay={2}
      />
    </>
  );
}

export default Lighting;
