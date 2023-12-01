import { useEffect, useState } from "react";
import useViewportSize from "@/app/src/hooks/useViewportSize"

export default function ViewportDisplay() {
  const viewportSize = useViewportSize();

  return (
    <div className="absolute top-0 text-red">
      <p>Viewport Width: {viewportSize.width}px</p>
      <p>Viewport Height: {viewportSize.height}px</p>
    </div>
  )
}
