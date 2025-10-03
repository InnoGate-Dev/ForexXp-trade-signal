// src/components/Loader.tsx
"use client";

import Lottie from "lottie-react";
import loadingAnimation from "../assets/Loading Crypto App.json";

export default function Loader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-white">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-64 h-64"
      />
    </div>
  );
}
