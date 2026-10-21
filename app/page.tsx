"use client"

import Typed from "typed.js";

import { Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  const [showItems, setShowItems] = useState<boolean>(false);
  const el = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Type effect animation
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: ['MAHADE', 'DEV'],
      typeSpeed: 30,
      loop: true,
      showCursor: false
    });

    // Scroll effect
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowItems(true);
      } else {
        setShowItems(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();

      window.removeEventListener('scroll', handleScroll);

    };
  }, []);


  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <h1 ref={el} className={`${spaceGrotesk.className} text-8xl ${showItems ? "text-sky-100" : "text-sky-400"}`} >
          MAHADE DEV
        </h1>
      </div>
      <div>
        <img src="https://www.unesco.org/sites/default/files/2024-10/world-coding-day.jpg" className="w-screen" alt="" />
      </div>
    </>
  );
} 
