import { Slot } from "@radix-ui/react-slot"
import { type VariantProps, cva } from "class-variance-authority"
import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "ease-editorial inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono font-medium tracking-widest uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background hover:-translate-y-px active:translate-y-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                primary: "bg-accent text-background hover:bg-foreground",
                secondary:
                    "border border-foreground/50 text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
                ghost: "text-foreground hover:bg-foreground/10",
            },
            size: {
                sm: "h-9 px-4 text-[11px]",
                md: "h-11 px-6 text-xs",
                lg: "h-13 px-8 text-[13px]",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
        },
    }
)

export interface ButtonProps
    extends
        ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
