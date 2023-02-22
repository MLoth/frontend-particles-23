import { Particle } from './Particle'

export const particleSystem = (() => {
  const particles: Particle[] = []
  let ctx: CanvasRenderingContext2D

  const passContext = (context: CanvasRenderingContext2D) => {
    ctx = context
  }

  // TODO: generate X particles, random on the canvas
  // Make this a promise, so we can await it
  const generate = (amount = 1000000) => {
    // new Promise
    for (let i = 0; i < amount; i++) {
      particles.push(
        new Particle(
          Math.random() * ctx.canvas.width,
          Math.random() * ctx.canvas.height,
        ),
      )
    }
    console.log(particles)
  }

  // TODO: draw particles
  const draw = () => {
    particles.forEach((particle) => {
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  // TODO: update particles (move them)
  const update = () => {
    for (const p of particles) {
      if (p.x < 0 || p.x > ctx.canvas.width) {
        p.dx = -p.dx
      }

      if (p.y < 0 || p.y > ctx.canvas.height) {
        p.dy = -p.dy
      }

      p.x = p.x + p.dx
      p.y = p.y + p.dy
    }
  }

  const clear = () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  const animate = () => {
    clear()
    update()
    draw()

    requestAnimationFrame(animate)
  }

  return {
    passContext,
    generate,
    draw,
    update,
    animate,
  }
})()
