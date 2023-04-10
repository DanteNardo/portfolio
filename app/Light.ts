const PI2: number = Math.PI * 2
const MinRadius: number = 40
const MaxRadius: number = 90
const VelocityModifier: number = 4

export type RGB = { red: number; green: number; blue: number }

export default class Light {
  xBounds: number
  yBounds: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  sin: number
  rgb: RGB

  constructor(stageWidth: number, stageHeight: number) {
    this.xBounds = 100 //stageWidth
    this.yBounds = 100 //stageHeight
    this.x = Math.random() * this.xBounds
    this.y = Math.random() * this.yBounds
    this.vx = Math.random() * VelocityModifier
    this.vy = Math.random() * VelocityModifier
    this.radius = Math.random() * (MaxRadius - MinRadius) + MinRadius
    this.sin = Math.random()
    this.rgb = { red: 255, green: 255, blue: 255 }
  }

  animate(context: CanvasRenderingContext2D | null | undefined) {
    if (!context) {
      console.warn('Context is undefined. Cannot animate')
      return
    }

    console.log(JSON.stringify(this))
    this.sin += 0.01
    this.radius = Math.sin(this.sin)
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0) {
      this.vx *= -1
      this.x += 10
    } else if (this.x > this.xBounds) {
      this.vx *= -1
      this.x -= 10
    }

    if (this.y < 0) {
      this.vy *= -1
      this.y += 10
    } else if (this.y > this.yBounds) {
      this.vy *= -1
      this.y -= 10
    }

    console.log('beginPath')
    context.beginPath()
    context.fillStyle = `rgba(${this.rgb?.red}, ${this.rgb?.green}, ${this.rgb?.blue}, 1)`
    context.arc(this.x, this.y, this.radius, 0, PI2, false)
    context.fill()
    console.log('fill')
  }
}
