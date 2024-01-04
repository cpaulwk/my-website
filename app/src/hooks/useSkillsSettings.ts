"use client"
import { useEffect, useState } from "react";

const useSkillsSettings = (divWidth: number) => {
  const [basis, setBasis] = useState("12.5%");
  const [grow, setGrow] = useState(0);


  useEffect(() => {
    switch (true) {
      case divWidth >= 725:
        setBasis("12.5%");
        setGrow(0);
        break;
      case divWidth >= 360:
        setBasis("25%");
        setGrow(0);
        break;
      case divWidth >= 180:
        setBasis("50%");
        setGrow(0);
        break;
      case divWidth < 180:
        setBasis("100%");
        setGrow(1);
        break
    }
  }, [divWidth]);

  return { basis, grow };
};

export default useSkillsSettings;
