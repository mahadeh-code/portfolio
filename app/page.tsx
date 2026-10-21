"use client"

import Typed from "typed.js";

import { Space_Grotesk } from "next/font/google";
import { useEffect, useRef } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['MAHADE', 'DEV'],
      typeSpeed: 30,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div className="h-screen flex items-center justify-center">
      <h1 ref={el} className={`${spaceGrotesk.className} text-8xl`} >
        MAHADE DEV
      </h1>
    </div>
  );
} 
