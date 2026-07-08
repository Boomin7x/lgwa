import { type ReactNode } from "react"
import { cn } from "@/lib/utils"
import { MicroLabel } from "./micro-label"

type SectionHeadingProps = {
    label?: string
    headline: string
    lede?: string
    className?: string
    children?: ReactNode
    slashes?: number
    as?: "h1" | "h2"
}

function SectionHeading({
    label,
    headline,
    lede,
    className,
    children,
    slashes,
    as: HeadingTag = "h2",
}: SectionHeadingProps) {
    return (
        <div className={cn("mb-16 md:mb-24", className)}>
            {label && (
                <MicroLabel slashes={slashes} className="mb-6">
                    {label}
                </MicroLabel>
            )}
            <HeadingTag className="font-heading text-display text-foreground max-w-4xl uppercase">
                {headline}
            </HeadingTag>
            {lede && (
                <p className="text-body text-muted mt-6 max-w-2xl text-pretty">
                    {lede}
                </p>
            )}
            {children}
        </div>
    )
}

export { SectionHeading }
