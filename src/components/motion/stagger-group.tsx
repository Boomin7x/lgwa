"use client"

import {
    type ReactNode,
    Children,
    isValidElement,
    cloneElement,
    type ReactElement,
} from "react"
import { useReducedMotion } from "./use-reduced-motion"

type StaggerGroupProps = {
    children: ReactNode
    className?: string
    staggerDelay?: number
}

const defaultStagger = 0.1

function StaggerGroup({
    children,
    className,
    staggerDelay = defaultStagger,
}: StaggerGroupProps) {
    const prefersReduced = useReducedMotion()

    if (prefersReduced) {
        return <div className={className}>{children}</div>
    }

    return (
        <div className={className}>
            {Children.map(children, (child, i) => {
                if (!isValidElement(child)) return child
                const existing = child as ReactElement<{ delay?: number }>
                return cloneElement(existing, {
                    delay: (existing.props.delay ?? 0) + i * staggerDelay,
                })
            })}
        </div>
    )
}

export { StaggerGroup }
