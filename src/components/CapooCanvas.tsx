import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const Capoo = () => {
  const capoo = useGLTF("./capoo/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="blue" />
      <primitive object={capoo.scene} scale={0.1} position={[0, -2, 0]} />
    </mesh>
  );
};

const MagicCapoo = () => {
  const MagicCapoo = useGLTF("./magicCapoo/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="blue" />
      <primitive object={MagicCapoo.scene} scale={4} position={[0, -2, 0]} />
    </mesh>
  );
};

const CapooCanvas = ({ speed = 1, isMagic }: { speed: number; isMagic: boolean }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate autoRotateSpeed={isMagic ? 10 : speed * 1.5} enableZoom={false} />
        {isMagic ? <MagicCapoo /> : <Capoo />}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CapooCanvas;
