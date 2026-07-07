import type { LabelHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    htmlFor: string
}

function Label({ className, htmlFor, ...props }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={cn(
                "text-foreground text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                className
            )}
            {...props}
        />
    )
}

export { Label }
