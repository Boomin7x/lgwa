"use client"

import { motion } from "motion/react"
import { type ReactNode } from "react"
import { useReducedMotion } from "./use-reduced-motion"
import { EASING, DURATION } from "./easing"

type FadeInProps = {
    children: ReactNode
    className?: string
    delay?: number
}

function FadeIn({ children, className, delay = 0 }: FadeInProps) {
    const prefersReduced = useReducedMotion()

    if (prefersReduced) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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

export { FadeIn }
