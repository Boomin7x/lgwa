import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MicroLabel } from "./micro-label"

type SectionHeadingProps = {
    label?: string
    headline: string
    lede?: string
    className?: string
    children?: ReactNode
}

function SectionHeading({
    label,
    headline,
    lede,
    className,
    children,
}: SectionHeadingProps) {
    return (
        <div className={cn("mb-16 md:mb-24", className)}>
            {label && <MicroLabel className="mb-4">{label}</MicroLabel>}
            <h2 className="font-display text-display text-foreground">
                {headline}
            </h2>
            {lede && (
                <p className="text-body text-muted mt-6 max-w-2xl">{lede}</p>
            )}
            {children}
        </div>
    )
}

export { SectionHeading }
