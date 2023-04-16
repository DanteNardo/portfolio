const PI2: number = Math.PI * 2
const MinRadius: number = 900
const MaxRadius: number = 900
const VelocityModifier: number = 4

export type RGB = { r: number; g: number; b: number }

export default class Light {
  xMin: number
  xMax: number
  yMin: number
  yMax: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  sin: number
  rgb: RGB

  constructor(
    stageWidth: number,
    stageHeight: number,
    context: CanvasRenderingContext2D | null | undefined,
    rgb: RGB,
  ) {
    this.xMin = stageWidth / 3
    this.xMax = (stageWidth * 2) / 3
    this.yMin = (stageHeight * 2) / 3
    this.yMax = stageHeight
    this.x = Math.random() * this.yMax
    this.y = Math.random() * (this.yMax - this.yMin) + this.yMin
    this.vx = Math.random() * VelocityModifier
    this.vy = Math.random() * VelocityModifier
    this.radius = Math.random() * (MaxRadius - MinRadius) + MinRadius
    this.sin = Math.random()
    this.rgb = rgb

    this.animate(context)
  }

  animate(context: CanvasRenderingContext2D | null | undefined) {
    if (!context) {
      console.error('Context is undefined. Cannot animate')
      return
    }

    this.sin += 0.01
    this.x += this.vx
    this.y += this.vy

    if (this.x < this.xMin) {
      this.vx *= -1
      this.x += 10
    } else if (this.x > this.xMax) {
      this.vx *= -1
      this.x -= 10
    }

    if (this.y < this.yMin) {
      this.vy *= -1
      this.y += 10
    } else if (this.y > this.yMax) {
      this.vy *= -1
      this.y -= 10
    }

    context.beginPath()
    const gradient = context.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius,
    )
    const colorStart = `rgba(${this.rgb?.r}, ${this.rgb?.g}, ${this.rgb?.b}, 1)`
    const colorMid = `rgba(${this.rgb?.r}, ${this.rgb?.g}, ${this.rgb?.b}, 0.1)`
    const colorEnd = `rgba(${this.rgb?.r}, ${this.rgb?.g}, ${this.rgb?.b}, 0)`
    gradient.addColorStop(0, colorStart)
    gradient.addColorStop(0.2, colorMid)
    gradient.addColorStop(1, colorEnd)
    context.fillStyle = gradient
    context.arc(this.x, this.y, this.radius, 0, PI2, false)
    context.fill()
  }
}
