import type { TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

function Textarea({
    className,
    ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={cn(
                "border-border text-foreground placeholder:text-muted focus-visible:border-accent focus-visible:ring-accent/20 flex min-h-32 w-full rounded-sm border bg-transparent px-4 py-3 transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }
