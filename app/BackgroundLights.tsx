'use client'

import { useEffect, useState, useRef } from 'react'
import BackgroundLight from './BackgroundLight'
import Light from './Light'

export default function BackgroundLights({}: {}) {
  const ref = useRef<HTMLCanvasElement | null>(null)
  // const [canvas, setCanvas] = useState<HTMLCanvasElement | null>()
  // const [context, setContext] = useState<CanvasRenderingContext2D | null>()
  const [lights, setLights] = useState<Array<Light>>([])
  // const [stageWidth, setStageWidth] = useState<number>(0)
  // const [stageHeight, setStageHeight] = useState<number>(0)
  const TotalLights = 2

  useEffect(() => {
    console.log('useEffect')
    const PixelRatio = 1 //window.devicePixelRatio > 1 ? 2 : 1

    const createLights = (stageWidth: number, stageHeight: number) => {
      let lights = []
      for (let i = 0; i < TotalLights; i++) {
        const light = new Light(stageWidth, stageHeight)
        lights.push(light)
        console.log(JSON.stringify(light))
      }
      setLights(lights)
    }

    const resize = () => {
      if (canvas && context) {
        console.log('resize')

        const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1
        const stageWidth = document.body.clientWidth * pixelRatio
        const stageHeight = document.body.clientHeight * pixelRatio
        canvas.width = stageWidth
        canvas.height = stageHeight
        context.scale(pixelRatio, pixelRatio)

        createLights(stageWidth, stageHeight)
      }
    }

    const animate = () => {
      console.log('animate')
      for (let i = 0; i < lights.length; i++) {
        console.log('light')
        const light = lights[i]
        light?.animate(context)
      }
    }

    console.log('useEffect')

    console.log(ref?.current)

    const canvas = ref?.current
    if (!canvas) return

    console.log('setCanvas')
    console.log(canvas)

    const context = ref?.current?.getContext('2d')
    if (!context) return

    console.log('setContext')
    console.log(context)

    window.addEventListener('resize', resize)
    const animationFrame = window.requestAnimationFrame(animate)

    console.log('init')
    resize()

    return () => {
      console.log('return')
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      <canvas ref={ref} className="w-full h-full" />
    </div>
  )
}
