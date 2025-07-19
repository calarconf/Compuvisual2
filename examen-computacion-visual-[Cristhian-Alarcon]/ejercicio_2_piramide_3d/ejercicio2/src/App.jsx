import React from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './components/Scene';
import './App.css';

function App() {
  return (
    <div id="root">
      <Canvas
        camera={{ position: [5, 5, 5], fov: 75 }}
        shadows
        gl={{ antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
