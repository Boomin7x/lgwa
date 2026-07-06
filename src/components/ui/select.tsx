import type { SelectHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

function Select({
    className,
    children,
    ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <select
            className={cn(
                "border-border text-foreground focus-visible:border-accent focus-visible:ring-accent/20 flex h-11 w-full rounded-sm border bg-transparent px-4 transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        >
            {children}
        </select>
    )
}

export { Select }
