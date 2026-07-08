"use client"

import { motion, useScroll, useSpring } from "motion/react"
import { useReducedMotion } from "./use-reduced-motion"

function ScrollProgress() {
    const prefersReduced = useReducedMotion()
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    })

    if (prefersReduced) {
        return null
    }

    return (
        <motion.div
            aria-hidden
            style={{ scaleX }}
            className="bg-accent fixed inset-x-0 top-0 z-50 h-0.5 origin-left"
        />
    )
}

export { ScrollProgress }
