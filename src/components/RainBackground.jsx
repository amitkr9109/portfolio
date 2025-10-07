import { useEffect, useRef } from 'react'

export default function RainBackground() {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const DPR = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = width * DPR
    canvas.height = height * DPR
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx.scale(DPR, DPR)

    const dropsCount = Math.floor((width * height) / 20000)
    const drops = Array.from({ length: dropsCount }, () => createDrop(width, height))

    let lastTime = performance.now()

    function frame(now) {
      const dt = Math.min(32, now - lastTime)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      // premium dark gradient background
      const grad = ctx.createLinearGradient(0, 0, width, height)
      grad.addColorStop(0, '#0a0a0a')
      grad.addColorStop(1, '#111827')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, width, height)

      ctx.lineWidth = 1
      ctx.strokeStyle = 'rgba(255,255,255,0.08)'

      for (let i = 0; i < drops.length; i++) {
        const d = drops[i]
        d.y += d.vy * (dt / 16)
        d.x += d.vx * (dt / 16)

        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - d.vx * 0.5, d.y - d.length)
        ctx.stroke()

        if (d.y > height + 20 || d.x < -20 || d.x > width + 20) {
          drops[i] = createDrop(width, height)
        }
      }

      animationRef.current = requestAnimationFrame(frame)
    }

    function onResize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * DPR
      canvas.height = height * DPR
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(DPR, DPR)
    }

    window.addEventListener('resize', onResize)
    animationRef.current = requestAnimationFrame(frame)
    return () => {
      window.removeEventListener('resize', onResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 select-none [image-rendering:pixelated]"
    />
  )
}

function createDrop(width, height) {
  // subtle diagonal rain
  const speed = 4 + Math.random() * 3
  const angle = Math.PI * (200 / 180) // ~20deg from vertical towards left
  const vx = Math.cos(angle) * speed
  const vy = Math.sin(angle) * speed
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx,
    vy,
    length: 10 + Math.random() * 10,
  }
}

