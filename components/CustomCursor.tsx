
"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationId = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.transform =
        `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      // Smooth trailing effect
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      cursor.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      animationId = requestAnimationFrame(animate);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      cursor.classList.toggle(
        "cursor-hover",
        !!target.closest("a, button, [data-cursor='hover']")
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor">
        <div className="cursor-ring" />
      </div>

      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
