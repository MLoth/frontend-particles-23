// iife
export default (function () {
  let canvas: HTMLCanvasElement

  // stretch canvas (to window size)
  const _stretchCanvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  // Get canvas
  const setup = (selector: string): CanvasRenderingContext2D | null => {
    const element = document.querySelector(selector)

    if (!element)
      throw new Error(`No canvas found, check the selector (${selector})`)

    canvas = element as HTMLCanvasElement
    _stretchCanvas()

    window.addEventListener('resize', _stretchCanvas)

    // Get context
    return canvas.getContext('2d')
  }

  return {
    setup,
  }
})()
