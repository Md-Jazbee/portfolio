"use client";

import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
  nx: number;
  ny: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    nx: 0,
    ny: 0,
  });

  useEffect(() => {
    let frame = 0;
    const handle = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const w = window.innerWidth || 1;
        const h = window.innerHeight || 1;
        setPosition({
          x: event.clientX,
          y: event.clientY,
          nx: (event.clientX / w) * 2 - 1,
          ny: (event.clientY / h) * 2 - 1,
        });
      });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handle);
      cancelAnimationFrame(frame);
    };
  }, []);

  return position;
}
