import { Colors } from '../interfaces/Colors'

export class Particle {
  x: number
  y: number
  dx: number
  dy: number
  size: number
  color: Colors

  constructor(
    x: number,
    y: number,
    dx?: number,
    dy?: number,
    size?: number,
    color?: Colors,
  ) {
    // x & y are required -> no access to context here
    this.x = x
    this.y = y
    this.dx = dx ? dx : Math.random() * 20 - 10
    this.dy = dy ? dy : Math.random() * 20 - 10
    this.size = size ? size : Math.random() * 5
    this.color = color
      ? color
      : Object.values(Colors)[
          Math.round(Math.random() * Object.values(Colors).length)
        ]
  }
}
