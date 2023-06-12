'use client'

import { useState } from 'react'
import { useCanvas } from '@/hooks/useCanvas'
import Light from './Light'

export default function BackgroundLights() {
  const { canvasRef, clear } = useCanvas(createLights, animate)
  const [lights, setLights] = useState<Array<Light>>([])

  function createLights(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) {
    setLights([
      new Light(canvas?.width, canvas?.height, context, {
        r: 128,
        g: 255,
        b: 128,
      }),
      new Light(canvas?.width, canvas?.height, context, {
        r: 0,
        g: 128,
        b: 255,
      }),
    ])
  }

  function animate(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) {
    clear()
    for (let i = 0; i < lights.length; i++) {
      const light = lights[i]
      light?.animate(context)
    }
  }

  return (
    <div className="print:hidden fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
