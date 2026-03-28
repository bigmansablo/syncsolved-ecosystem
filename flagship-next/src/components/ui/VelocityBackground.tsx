"use client"

import React, {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
} from "react"
import { cn } from "@/lib/utils"

interface MousePosition {
  x: number
  y: number
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return mousePosition
}

interface VelocityBackgroundProps extends ComponentPropsWithoutRef<"div"> {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
  linkDistance?: number
}

type Node = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
  isCyan: boolean
}

export const VelocityBackground: React.FC<VelocityBackgroundProps> = ({
  className = "",
  quantity = 120,
  staticity = 40,
  ease = 60,
  refresh = false,
  linkDistance = 140,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const nodes = useRef<Node[]>([])
  const mousePosition = useMousePosition()
  const mouse = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1
  const rafID = useRef<number | null>(null)
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()

    const handleResize = () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current)
      resizeTimeout.current = setTimeout(() => {
        initCanvas()
      }, 200)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      if (rafID.current != null) window.cancelAnimationFrame(rafID.current)
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current)
      window.removeEventListener("resize", handleResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect()
      const { w, h } = canvasSize.current
      const x = mousePosition.x - rect.left - w / 2
      const y = mousePosition.y - rect.top - h / 2
      const inside = mousePosition.x !== 0 || mousePosition.y !== 0
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
        mouse.current.active = true
      }
    }
  }, [mousePosition.x, mousePosition.y])

  useEffect(() => {
    initCanvas()
  }, [refresh])

  const initCanvas = () => {
    resizeCanvas()
    drawParticles()
  }

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      canvasSize.current.w = canvasContainerRef.current.offsetWidth
      canvasSize.current.h = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = canvasSize.current.w * dpr
      canvasRef.current.height = canvasSize.current.h * dpr
      canvasRef.current.style.width = `${canvasSize.current.w}px`
      canvasRef.current.style.height = `${canvasSize.current.h}px`
      context.current.scale(dpr, dpr)

      nodes.current = []
      for (let i = 0; i < quantity; i++) {
        nodes.current.push(nodeParams())
      }
    }
  }

  const nodeParams = (): Node => {
    const x = Math.floor(Math.random() * canvasSize.current.w)
    const y = Math.floor(Math.random() * canvasSize.current.h)
    const size = Math.random() * 1.5 + 0.5
    const targetAlpha = Math.random() * 0.5 + 0.2
    const dx = (Math.random() - 0.5) * 0.2
    const dy = (Math.random() - 0.5) * 0.2
    const magnetism = 0.1 + Math.random() * 4
    const isCyan = Math.random() > 0.4 // 60% cyan, 40% amber

    return {
      x,
      y,
      translateX: 0,
      translateY: 0,
      size,
      alpha: 0,
      targetAlpha,
      dx,
      dy,
      magnetism,
      isCyan,
    }
  }

  const drawNode = (node: Node) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = node
      context.current.beginPath()
      context.current.arc(x + translateX, y + translateY, size, 0, 2 * Math.PI)
      context.current.fillStyle = `rgba(20, 184, 166, ${alpha})`
      context.current.fill()
    }
  }

  const drawConnections = () => {
    if (!context.current) return
    const activeNodes = nodes.current
    const activeDistance = mouse.current.active ? linkDistance * 1.5 : linkDistance

    for (let i = 0; i < activeNodes.length; i++) {
      for (let j = i + 1; j < activeNodes.length; j++) {
        const n1 = activeNodes[i]
        const n2 = activeNodes[j]
        
        const dx = (n1.x + n1.translateX) - (n2.x + n2.translateX)
        const dy = (n1.y + n1.translateY) - (n2.y + n2.translateY)
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < activeDistance) {
            // Distance opacity threshold
            const opacity = 1 - distance / activeDistance
            // Modulate opacity if close to mouse
            const mdx = (n1.x + n1.translateX) - (mouse.current.x + canvasSize.current.w / 2)
            const mdy = (n1.y + n1.translateY) - (mouse.current.y + canvasSize.current.h / 2)
            const mDist = Math.sqrt(mdx * mdx + mdy * mdy)
            
            let finalOpacity = opacity * 0.15
            if (mDist < 200) {
               finalOpacity = opacity * 0.4 // brighter when engaged
            }

            // Brand Teal Base
            const baseColor = '20, 184, 166'

            context.current.beginPath()
            context.current.moveTo(n1.x + n1.translateX, n1.y + n1.translateY)
            context.current.lineTo(n2.x + n2.translateX, n2.y + n2.translateY)
            context.current.strokeStyle = `rgba(${baseColor}, ${finalOpacity})`
            context.current.lineWidth = 0.6
            context.current.stroke()
        }
      }
    }
  }

  const clearContext = () => {
    if (context.current) {
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
    }
  }

  const drawParticles = () => {
    clearContext()
    for (let i = 0; i < quantity; i++) {
      drawNode(nodes.current[i])
    }
    drawConnections()
  }

  const remapValue = (value: number, s1: number, e1: number, s2: number, e2: number): number => {
    const remapped = ((value - s1) * (e2 - s2)) / (e1 - s1) + s2
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    clearContext()
    nodes.current.forEach((node, i) => {
      const edge = [
        node.x + node.translateX - node.size,
        canvasSize.current.w - node.x - node.translateX - node.size,
        node.y + node.translateY - node.size,
        canvasSize.current.h - node.y - node.translateY - node.size,
      ]
      const closestEdge = Math.min(...edge)
      const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2))

      if (remapClosestEdge > 1) {
        node.alpha += 0.02
        if (node.alpha > node.targetAlpha) node.alpha = node.targetAlpha
      } else {
        node.alpha = node.targetAlpha * remapClosestEdge
      }

      node.x += node.dx
      node.y += node.dy
      node.translateX += (mouse.current.x / (staticity / node.magnetism) - node.translateX) / ease
      node.translateY += (mouse.current.y / (staticity / node.magnetism) - node.translateY) / ease

      drawNode(node)

      if (
        node.x < -node.size ||
        node.x > canvasSize.current.w + node.size ||
        node.y < -node.size ||
        node.y > canvasSize.current.h + node.size
      ) {
        nodes.current[i] = nodeParams()
      }
    })

    drawConnections()
    rafID.current = window.requestAnimationFrame(animate)
  }

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-0 bg-black", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
    </div>
  )
}
