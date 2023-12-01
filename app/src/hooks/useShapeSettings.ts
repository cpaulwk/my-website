import { useEffect, useState } from "react";

export const useShapeSettings = (divWidth: number) => {
  const [shapeNumber, setShapeNumber] = useState(10);
  const [shapeSize, setShapeSize] = useState(286);


  useEffect(() => {
    switch (true) {
      case divWidth >= 1434:
        setShapeNumber(10);
        setShapeSize(286);
        break;
      case divWidth >= 1076:
        setShapeNumber(10);
        setShapeSize(215);
        break;
      case divWidth >= 807:
        setShapeNumber(10);
        setShapeSize(161);
        break;
      case divWidth >= 672:
        setShapeNumber(10);
        setShapeSize(134);
        break;
      case divWidth >= 538:
        setShapeNumber(10);
        setShapeSize(107);
        break;
      case divWidth >= 403:
        setShapeNumber(9);
        setShapeSize(134);
        break;
      case divWidth >= 336:
        setShapeNumber(9);
        setShapeSize(112);
        break;
      case divWidth >= 269:
        setShapeNumber(9);
        setShapeSize(89);
        break;
      case divWidth >= 179:
        setShapeNumber(9);
        setShapeSize(59);
        break;
      case divWidth < 179:
        setShapeNumber(9);
        setShapeSize(53);
        break;
    }
  }, [divWidth]);

  return { shapeNumber, shapeSize };
};

export default useShapeSettings;
