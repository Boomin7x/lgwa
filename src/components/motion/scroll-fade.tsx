"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef, type ReactNode } from "react"
import { useReducedMotion } from "./use-reduced-motion"

type ScrollFadeProps = {
    children: ReactNode
    className?: string
}

function ScrollFade({ children, className }: ScrollFadeProps) {
    const ref = useRef<HTMLDivElement>(null)
    const prefersReduced = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })
    const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])
    const y = useTransform(scrollYProgress, [0, 1], [0, -56])

    return (
        <div ref={ref} className={className}>
            <motion.div style={prefersReduced ? undefined : { opacity, y }}>
                {children}
            </motion.div>
        </div>
    )
}

export { ScrollFade }
