"use client"
import { useEffect, useState } from "react";

const useDivWidth = (divId: string): number => {
  const [divWidth, setDivWidth] = useState<number>(0);

  const updateDivWidth = (): void => {
    const yourDiv = document.getElementById(divId);

    if (yourDiv) {
      const newDivWidth: number = yourDiv.clientWidth;
      setDivWidth(newDivWidth);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateDivWidth);

    updateDivWidth();

    return () => {
      window.removeEventListener("resize", updateDivWidth);
    };
  }, [divId])

  return divWidth;
};

export default useDivWidth;
