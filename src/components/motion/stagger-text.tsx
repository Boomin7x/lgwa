"use client"

import { motion } from "motion/react"
import { type ReactNode, isValidElement, type ReactElement } from "react"
import { useReducedMotion } from "./use-reduced-motion"
import { EASING, DURATION } from "./easing"

type StaggerTextProps = {
    children: ReactNode
    className?: string
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
    delay?: number
}

const wordStagger = 0.04

function StaggerText({
    children,
    className,
    as: Tag = "h1",
    delay = 0,
}: StaggerTextProps) {
    const prefersReduced = useReducedMotion()

    if (prefersReduced) {
        return <Tag className={className}>{children}</Tag>
    }

    const text = extractText(children)

    return (
        <Tag className={className} aria-label={text}>
            {text.split(" ").map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden align-top"
                >
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: DURATION.slow,
                            ease: EASING.out,
                            delay: delay + i * wordStagger,
                        }}
                    >
                        {word}
                        {i < text.split(" ").length - 1 ? "\u00A0" : ""}
                    </motion.span>
                </span>
            ))}
        </Tag>
    )
}

function extractText(node: ReactNode): string {
    if (typeof node === "string") return node
    if (typeof node === "number") return String(node)
    if (isValidElement(node)) {
        const element = node as ReactElement<{ children?: ReactNode }>
        const elementChildren = element.props.children
        if (Array.isArray(elementChildren)) {
            return elementChildren.map(extractText).join("")
        }
        return extractText(elementChildren)
    }
    if (Array.isArray(node)) {
        return node.map(extractText).join("")
    }
    return ""
}

export { StaggerText }
