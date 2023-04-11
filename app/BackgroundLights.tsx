'use client'

import { useState } from 'react'
import { useCanvas } from '@/hooks/useCanvas'
import Light from './Light'

export default function BackgroundLights({}: {}) {
  const { canvasRef, clear } = useCanvas(createLights, animate)
  const [lights, setLights] = useState<Array<Light>>([])
  const LightCount = 1000

  function createLights(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) {
    let lights = []
    for (let i = 0; i < LightCount; i++) {
      const light = new Light(canvas?.width, canvas?.height, context, {
        r: 255,
        g: 255,
        b: 255,
      })
      lights.push(light)
    }
    for (let i = 0; i < LightCount / 2; i++) {
      const light = new Light(canvas?.width, canvas?.height, context, {
        r: 0,
        g: 0,
        b: 0,
      })
      lights.push(light)
    }
    setLights(lights)
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
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
