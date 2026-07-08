import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
    children: ReactNode
    className?: string
    variant?: "dark" | "light" | "bordeaux"
    id?: string
}

const variantStyles: Record<NonNullable<SectionProps["variant"]>, string> = {
    dark: "surface-dark",
    light: "surface-light",
    bordeaux: "surface-bordeaux",
}

function Section({ children, className, variant = "dark", id }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "px-5 py-24 sm:px-8 md:py-40",
                variantStyles[variant],
                className
            )}
        >
            <div className="mx-auto max-w-[1440px]">{children}</div>
        </section>
    )
}

export { Section }
