"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "./use-reduced-motion"

type ParallaxProps = {
    children: ReactNode
    className?: string
    strength?: number
}

function Parallax({ children, className, strength = 48 }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null)
    const prefersReduced = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })
    const y = useTransform(scrollYProgress, [0, 1], [-strength, strength])

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.div
                style={prefersReduced ? undefined : { y }}
                className="relative h-full w-full"
            >
                {children}
            </motion.div>
        </div>
    )
}

export { Parallax }
