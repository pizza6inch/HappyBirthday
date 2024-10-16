import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";
import useDeviceType from "../hooks/useDeviceType";

type CapooProps = {
  isMobile: boolean;
};

const Capoo = ({ isMobile }: CapooProps) => {
  const capoo = useGLTF("./capoo/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="blue" />
      <primitive object={capoo.scene} scale={isMobile ? 0.1 : 0.1} position={isMobile ? [0, -2, 0] : [0, -2, 0]} />
    </mesh>
  );
};

const CapooCanvas = ({ speed = 1 }: { speed: number }) => {
  const deviceType = useDeviceType();

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate autoRotateSpeed={speed * 1.5} enableZoom={false} />
        <Capoo isMobile={deviceType === "mobile"} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CapooCanvas;
