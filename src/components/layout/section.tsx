import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
    children: ReactNode
    className?: string
    variant?: "dark" | "light" | "bordeaux"
    id?: string
}

const variantStyles: Record<NonNullable<SectionProps["variant"]>, string> = {
    dark: "bg-background",
    light: "bg-foreground text-background",
    bordeaux: "bg-secondary",
}

function Section({ children, className, variant = "dark", id }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "px-8 py-20 md:py-40",
                variantStyles[variant],
                className
            )}
        >
            <div className="mx-auto max-w-[1440px]">{children}</div>
        </section>
    )
}

export { Section }
