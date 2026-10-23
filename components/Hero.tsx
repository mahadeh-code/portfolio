
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="min-h-screen bg-black text-white flex items-center justify-center"
    >
      <h1 className="hero-title text-5xl font-bold">
        Hello, I'm Mahade
      </h1>
    </main>
  );
}
