'use client'

import { useEffect, useState, useRef } from 'react'
import Light from './Light'
import { useCanvas } from '@/hooks/useCanvas'

export default function BackgroundLights({}: {}) {
  const { canvasRef, clear } = useCanvas(createLights, animate)
  const [lights, setLights] = useState<Array<Light>>([])
  const TotalLights = 2

  function createLights(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) {
    let lights = []
    for (let i = 0; i < TotalLights; i++) {
      const light = new Light(canvas?.width, canvas?.height, context)
      lights.push(light)
      // console.log(JSON.stringify(light))
    }
    setLights(lights)
  }

  function animate(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) {
    // console.log('animate|background-lights')
    clear()
    for (let i = 0; i < lights.length; i++) {
      // console.log('animate|background-light')
      const light = lights[i]
      light?.animate(context)
    }
  }

  // useEffect(() => {
  //   console.log('useEffect|[ref]')

  //   console.log('setCanvas')
  //   console.log(ref?.current)
  //   setCanvas(ref?.current)

  //   console.log('setContext')
  //   console.log(ref?.current?.getContext('2d'))
  //   setContext(ref?.current?.getContext('2d'))
  // }, [ref])

  // useEffect(() => {
  //   console.log('useEffect|[]')
  //   console.log(JSON.stringify(canvas))
  //   console.log(JSON.stringify(context))
  //   const PixelRatio = 1 //window.devicePixelRatio > 1 ? 2 : 1

  //   const resize = () => {
  //     if (canvas && context) {
  //       console.log('resize')

  //       const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1
  //       setStageWidth(document.body.clientWidth * pixelRatio)
  //       setStageHeight(document.body.clientHeight * pixelRatio)
  //       canvas.width = stageWidth
  //       canvas.height = stageHeight
  //       context.scale(pixelRatio, pixelRatio)

  //       createLights()
  //     }
  //   }

  //   window.addEventListener('resize', resize)
  //   // const animationFrame = window.requestAnimationFrame(animate)

  //   console.log('init')
  //   resize()

  //   return () => {
  //     console.log('return')
  //     window.removeEventListener('resize', resize)
  //     // cancelAnimationFrame(animationFrame)
  //   }
  // }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
