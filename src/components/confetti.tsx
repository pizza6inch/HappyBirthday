// ConfettiComponent.tsx
import React, { useRef, useEffect } from "react";
import Confetti from "react-canvas-confetti";

const ConfettiComponent: React.FC = () => {
  const refAnimationInstance = useRef<typeof Confetti | null>(null);

  const getInstance = (instance: typeof Confetti | null) => {
    refAnimationInstance.current = instance;
  };

  const makeShot = (particleRatio: number, opts: any) => {
    refAnimationInstance.current?.canvas?.dispatchEvent(
      new CustomEvent("confetti", { detail: { particleRatio, opts } })
    );
  };

  useEffect(() => {
    makeShot(0.25, { spread: 360, colors: ["#FF0000", "#00FF00", "#0000FF"], shapes: ["circle"] });
  }, []);

  return (
    <Confetti
      refConfetti={getInstance}
      numberOfPieces={500}
      recycle={false}
      onConfetti={() => {}}
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ConfettiComponent;
