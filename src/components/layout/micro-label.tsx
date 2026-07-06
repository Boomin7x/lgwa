import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

type MicroLabelProps = {
    children: ReactNode
    className?: string
}

function MicroLabel({ children, className }: MicroLabelProps) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <span className="bg-accent block h-2 w-2" />
            <span className="text-micro text-accent tracking-[0.15em] uppercase">
                {children}
            </span>
        </div>
    )
}

export { MicroLabel }
