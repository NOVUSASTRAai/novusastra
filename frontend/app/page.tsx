"use client"; // Enable client-side rendering for Canvas
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Image from "next/image";
import SciFiScene from "../components/SciFiScene";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(45deg, #1e3c72, #2ecc71, #f1c40f)", // Blue, green, yellow gradient
        overflow: "hidden",
      }}
    >
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SciFiScene />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
      <Image
        src="/novasastra-logo.png"
        alt="NovusAstra Logo"
        width={200}
        height={200}
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
      <h1
        style={{
          color: "white",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "3rem",
          textShadow: "0 0 10px #2ecc71, 0 0 20px #f1c40f",
        }}
      >
        NovusAstra OS - Transcendental Tech
      </h1>
    </div>
  );
}
