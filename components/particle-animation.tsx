"use client"

import { useEffect, useRef } from "react"

interface ParticleAnimationProps {
  density?: number
  speed?: number
  maxDistance?: number
  opacity?: number
  className?: string
}

export default function ParticleAnimation({
  density = 100,
  speed = 0.5,
  maxDistance = 150,
  opacity = 0.7,
  className = "",
}: ParticleAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        const { width, height } = container.getBoundingClientRect()
        canvas.width = width
        canvas.height = height

        // Reinitialize particles when dimensions change
        if (particlesArray.length > 0) {
          init()
        }
      }
    }

    // Create particles
    const particlesArray: Particle[] = []

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * (canvas?.width || 0)
        this.y = Math.random() * (canvas?.height || 0)
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * speed
        this.speedY = (Math.random() - 0.5) * speed
        this.color = `hsla(160, 100%, ${50 + Math.random() * 20}%, ${0.1 + Math.random() * 0.3})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > (canvas?.width || 0) || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > (canvas?.height || 0) || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const init = () => {
      particlesArray.length = 0
      const numberOfParticles = (Math.floor((canvas.width * canvas.height) / 10000) * density) / 100
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    // Set initial dimensions and initialize particles
    setCanvasDimensions()
    init()

    // Connect particles with lines
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const lineOpacity = 1 - distance / maxDistance
            ctx.strokeStyle = `hsla(160, 100%, 70%, ${lineOpacity * 0.2 * opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      connect()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    window.addEventListener("resize", setCanvasDimensions)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [density, speed, maxDistance, opacity]) // Removed dimensions from dependencies

  return <canvas ref={canvasRef} className={`absolute inset-0 z-0 ${className}`} style={{ opacity }} />
}

