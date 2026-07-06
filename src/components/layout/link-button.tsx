import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type LinkButtonProps = {
    href: string
    children: string
    className?: string
    variant?: "primary" | "ghost"
}

function LinkButton({
    href,
    children,
    className,
    variant = "primary",
}: LinkButtonProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group inline-flex items-center gap-2 text-sm font-medium transition-all duration-300",
                variant === "primary" && "text-accent hover:text-accent-soft",
                variant === "ghost" && "text-muted hover:text-foreground",
                className
            )}
        >
            {children}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
    )
}

export { LinkButton }
