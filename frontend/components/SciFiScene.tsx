"use client"; // Enable client-side rendering for 3D components
import { useSpring, animated } from "@react-spring/three";

const SciFiScene = () => {
  const { scale } = useSpring({ scale: 1.5, from: { scale: 0 }, config: { duration: 1500 } });
  return (
    <animated.mesh scale={scale}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="blue" />
    </animated.mesh>
  );
};

export default SciFiScene;
