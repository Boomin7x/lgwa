import type { InputHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

function Input({
    className,
    type,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type={type}
            className={cn(
                "border-border text-foreground placeholder:text-muted focus-visible:border-accent focus-visible:ring-accent/20 flex h-11 w-full rounded-sm border bg-transparent px-4 transition-colors duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    )
}

export { Input }
