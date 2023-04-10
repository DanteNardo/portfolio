import { useEffect, useRef, useState } from 'react'
import { clearInterval, setInterval } from 'timers'

export const useCanvas = (
  onResize: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => void,
  onAnimate: (
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ) => void,
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [frames, setFrames] = useState<number>(0)

  function clear() {
    const canvas = canvasRef?.current
    if (!canvas) return

    const context = canvas?.getContext('2d')
    if (!context) return

    context.clearRect(0, 0, canvas.width, canvas.height)
  }

  useEffect(() => {
    const resize = () => {
      // console.log('useCanvas|useEffect|resize')
      const canvas = canvasRef?.current
      const context = canvas?.getContext('2d')

      if (canvas && context) {
        const pixelRatio = 1 //window.devicePixelRatio > 1 ? 2 : 1
        const stageWidth = document.body.clientWidth * pixelRatio
        const stageHeight = document.body.clientHeight * pixelRatio
        canvas.width = stageWidth
        canvas.height = stageHeight
        context.scale(pixelRatio, pixelRatio)

        // console.log('useCanvas|useEffect|onResize')
        onResize(canvas, context)
      }
    }

    window.addEventListener('resize', resize)
    resize()

    return () => {
      // console.log('useCanvas|useEffect|return|resize')
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    const animate = () => {
      // console.log('useCanvas|useEffect|animate')
      const canvas = canvasRef?.current
      const context = canvas?.getContext('2d')

      if (canvas && context) {
        // console.log('useCanvas|useEffect|onAnimate')
        onAnimate(canvas, context)
      }
    }

    const interval = setInterval(() => {
      setFrames((frames) => frames + 1)
      animate()
    }, 1000 / 60)

    return () => {
      // console.log('useCanvas|useEffect|return|animate')
      clearInterval(interval)
    }
  }, [onAnimate])

  return { canvasRef, clear }
}
