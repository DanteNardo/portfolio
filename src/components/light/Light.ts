const PI2: number = Math.PI * 2;
const MinRadius: number = 100;
const MaxRadius: number = 600;
const VelocityModifier: number = 4;
const PageHeightInPixels: number = 1056;

export type RGB = { r: number; g: number; b: number };

export default class Light {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  sin: number;
  rgb: RGB;

  constructor(
    stageWidth: number,
    stageHeight: number,
    context: CanvasRenderingContext2D | null | undefined,
    rgb: RGB,
  ) {
    this.xMin = stageWidth / 3;
    this.xMax = (stageWidth * 2) / 3;
    this.yMax = Math.min(stageHeight, PageHeightInPixels);
    this.yMin = this.yMax * (2 / 3);
    this.x = this.xMax / 2;
    this.y = Math.random() * (this.yMax - this.yMin) + this.yMin;
    this.vx = Math.random() * VelocityModifier;
    this.vy = Math.random() * VelocityModifier;
    this.radius = 0;
    this.sin = 0;
    this.rgb = rgb;

    this.animate(context);
  }

  animate(context: CanvasRenderingContext2D | null | undefined) {
    if (!context) {
      console.error('Context is undefined. Cannot animate');
      return;
    }

    this.sin += 0.01;
    let radiusFactor = (Math.sin(this.sin) + 1) / 2;
    this.radius = radiusFactor * (MaxRadius - MinRadius) + MinRadius;
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < this.xMin) {
      this.vx *= -1;
      this.x += 10;
    } else if (this.x > this.xMax) {
      this.vx *= -1;
      this.x -= 10;
    }

    if (this.y < this.yMin) {
      this.vy *= -1;
      this.y += 10;
    } else if (this.y > this.yMax) {
      this.vy *= -1;
      this.y -= 10;
    }

    context.beginPath();
    const gradient = context.createRadialGradient(
      this.x,
      this.y,
      this.radius * 0.01,
      this.x,
      this.y,
      this.radius,
    );
    const colorFull = `rgba(${this.rgb?.r}, ${this.rgb?.g}, ${this.rgb?.b}, 1)`;
    const colorHalf = `rgba(${this.rgb?.r}, ${this.rgb?.g}, ${this.rgb?.b}, 0.5)`;
    const colorQuarter = `rgba(${this.rgb?.r}, ${this.rgb?.g}, ${this.rgb?.b}, 0.25)`;
    const colorNone = `rgba(${this.rgb?.r}, ${this.rgb?.g}, ${this.rgb?.b}, 0)`;
    gradient.addColorStop(0, colorFull);
    gradient.addColorStop(0.25, colorHalf);
    gradient.addColorStop(0.5, colorQuarter);
    gradient.addColorStop(1, colorNone);
    context.fillStyle = gradient;
    context.globalCompositeOperation = 'multiply';
    context.arc(this.x, this.y, this.radius, 0, PI2, false);
    context.fill();
  }
}
