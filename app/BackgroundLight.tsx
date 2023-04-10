'use client'

import { useEffect, useState } from 'react'

type RGB = { red: number; green: number; blue: number }

export default function BackgroundLight({
  canvas,
  context,
  stageWidth,
  stageHeight,
}: {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  stageWidth: number
  stageHeight: number
}) {
  const PI2: number = Math.PI * 2
  const minRadius = 40
  const maxRadius = 90
  const [x, setX] = useState<number>(Math.random() * stageWidth)
  const [y, setY] = useState<number>(Math.random() * stageHeight)
  const [vx, setVX] = useState<number>(Math.random() * 4)
  const [vy, setVY] = useState<number>(Math.random() * 4)
  const [radius, setRadius] = useState<number>(
    Math.random() * (maxRadius - minRadius) + minRadius,
  )
  const [sin, setSin] = useState<number>(Math.random())
  const [rgb, setRGB] = useState<RGB>({ red: 255, green: 255, blue: 255 })

  useEffect(() => {
    const animate = () => {
      console.log('animate')
      setSin(sin + 0.01)
      setRadius(Math.sin(sin))
      setX(x + vx)
      setY(y + vy)

      if (x < 0) {
        setVX(vx * -1)
        setX(x + 10)
      } else if (x > stageWidth) {
        setVX(vx * -1)
        setX(x - 10)
      }

      if (y < 0) {
        setVY(vy * -1)
        setY(y + 10)
      } else if (y > stageHeight) {
        setVY(vy * -1)
        setY(y - 10)
      }

      context.beginPath()
      context.fillStyle = `rgba(${rgb?.red}, ${rgb?.green}, ${rgb?.blue}, 1)`
      context.arc(x, y, radius, 0, PI2, false)
      context.fill()
    }

    window.requestAnimationFrame(animate)
  }, [])

  return <></>
}
