"use client"

import { motion } from "motion/react"
import { type ReactNode } from "react"
import { useReducedMotion } from "./use-reduced-motion"
import { EASING, DURATION } from "./easing"

type RevealProps = {
    children: ReactNode
    className?: string
    direction?: "up" | "down" | "left" | "right"
    delay?: number
}

const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
}

function Reveal({
    children,
    className,
    direction = "up",
    delay = 0,
}: RevealProps) {
    const prefersReduced = useReducedMotion()
    const offset = directionMap[direction]

    if (prefersReduced) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: DURATION.medium,
                ease: EASING.out,
                delay,
            }}
        >
            {children}
        </motion.div>
    )
}

export { Reveal }
