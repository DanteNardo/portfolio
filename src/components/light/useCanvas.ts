import { useEffect, useRef, useState } from "react";

// A custom hook that acts as canvas reference and
// exposes callback methods on certain events
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
  const oneSecondInMilliseconds: number = 1000;
  const FPS: number = 60;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [frames, setFrames] = useState<number>(0);

  // A function that is returned to clear the canvas when necessary
  function clear() {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    const context = canvas?.getContext("2d");
    if (!context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  // Listens to the window resize event and fires the onResize callback
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef?.current;
      const context = canvas?.getContext("2d");

      if (canvas && context) {
        const stageWidth = document.body.clientWidth;
        const stageHeight = document.body.clientHeight;
        canvas.width = stageWidth;
        canvas.height = stageHeight;

        onResize(canvas, context);
      }
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Fires the animate callback on a specified interval (60 FPS)
  useEffect(() => {
    const animate = () => {
      const canvas = canvasRef?.current;
      const context = canvas?.getContext("2d");

      if (canvas && context) {
        onAnimate(canvas, context);
      }
    };

    const interval = setInterval(() => {
      setFrames((frames) => frames + 1);
      animate();
    }, oneSecondInMilliseconds / FPS);

    return () => {
      clearInterval(interval);
    };
  }, [onAnimate]);

  return { canvasRef, clear };
};
