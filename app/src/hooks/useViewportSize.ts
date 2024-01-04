"use client"
import { useEffect, useState } from "react";

const useViewportSize = () => {
  const [viewportSize, setViewportSize] = useState({
    width: (typeof window !== 'undefined' && window.innerWidth) || 0,
    height: (typeof window !== 'undefined' && window.innerHeight) || 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: (typeof window !== 'undefined' && window.innerWidth) || 0,
        height: (typeof window !== 'undefined' && window.innerHeight) || 0,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

  }, []);

  return viewportSize;
};

export default useViewportSize;
