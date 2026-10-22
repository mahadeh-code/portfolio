"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TestAnimation() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 300, // Move 300px to the right as you scroll
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: true, // Look for these lines on your screen!
      },
    });
  });

  return (
    <div style={{ height: "200vh", padding: "100px" }}>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          marginTop: "500px", // Push it down so you have to scroll to it
        }}
      />
    </div>
  );
}