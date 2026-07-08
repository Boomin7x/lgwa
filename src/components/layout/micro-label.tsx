import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

type MicroLabelProps = {
    children: ReactNode
    className?: string
    slashes?: number
}

function MicroLabel({ children, className, slashes = 2 }: MicroLabelProps) {
    return (
        <p
            className={cn(
                "text-micro text-accent font-mono uppercase",
                className
            )}
        >
            <span aria-hidden className="text-accent/70 mr-2">
                {"/".repeat(slashes)}
            </span>
            {children}
        </p>
    )
}

export { MicroLabel }
