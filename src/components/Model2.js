import React from 'react';
import { Canvas, useThree } from 'react-three-fiber';
import * as THREE from 'three';

const CubeWithTexts = () => {
  const cubeRef = React.useRef();

  const TextMesh = ({ position, text }) => {
    const { camera } = useThree();

    const sprite = new THREE.TextSprite({
      text: text,
      fontFamily: 'Arial, sans-serif',
      fontSize: 70,
      material: {
        color: 'white',
      },
    });

    React.useEffect(() => {
      cubeRef.current.attach(sprite);
      sprite.position.set(position[0], position[1], position[2]);
      camera.add(sprite);

      return () => {
        cubeRef.current.remove(sprite);
        camera.remove(sprite);
      };
    }, [camera, position, sprite]);

    return null;
  };

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" />
      <TextMesh position={[0, 0, 0.6]} text="Front" />
      <TextMesh position={[0, 0, -0.6]} text="Back" />
      <TextMesh position={[0.6, 0, 0]} text="Right" />
      <TextMesh position={[-0.6, 0, 0]} text="Left" />
      <TextMesh position={[0, 0.6, 0]} text="Top" />
      <TextMesh position={[0, -0.6, 0]} text="Bottom" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <CubeWithTexts />
    </Canvas>
  );
};

export default App;
