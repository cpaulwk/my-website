import { useViewportSize } from "@/app/src/hooks"

export default function ViewportDisplay() {
  const viewportSize = useViewportSize();

  return (
    <div className="fixed z-10 top-0 text-red w-full flex justify-center">
      <div className="bg-white">
        <p>Viewport Width: {viewportSize.width}px</p>
        <p>Viewport Height: {viewportSize.height}px</p>
      </div>
    </div>
  )
}
