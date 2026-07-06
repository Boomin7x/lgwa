"use client"

import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import {
    createContext,
    useContext,
    useCallback,
    useEffect,
    type ReactNode,
} from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"

type SheetContextValue = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const SheetContext = createContext<SheetContextValue | null>(null)

type SheetProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    children: ReactNode
}

function Sheet({ open, onOpenChange, children }: SheetProps) {
    const handleEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onOpenChange(false)
        },
        [onOpenChange]
    )

    useEffect(() => {
        if (open) {
            document.addEventListener("keydown", handleEscape)
            document.body.style.overflow = "hidden"
        }
        return () => {
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = ""
        }
    }, [open, handleEscape])

    return (
        <SheetContext.Provider value={{ open, onOpenChange }}>
            {children}
        </SheetContext.Provider>
    )
}

type SheetTriggerProps = {
    children: ReactNode
    className?: string
}

function SheetTrigger({ children, className }: SheetTriggerProps) {
    const ctx = useContext(SheetContext)
    if (!ctx) throw new Error("SheetTrigger must be inside Sheet")

    return (
        <button
            type="button"
            onClick={() => ctx.onOpenChange(true)}
            className={className}
        >
            {children}
        </button>
    )
}

type SheetContentProps = {
    children: ReactNode
    className?: string
    side?: "left" | "right"
}

function SheetContent({
    children,
    className,
    side = "right",
}: SheetContentProps) {
    const ctx = useContext(SheetContext)
    const prefersReduced = useReducedMotion()
    if (!ctx) throw new Error("SheetContent must be inside Sheet")

    const isRight = side === "right"

    return (
        <AnimatePresence>
            {ctx.open && (
                <div className="fixed inset-0 z-50 flex">
                    <motion.div
                        className="fixed inset-0 bg-black/60"
                        initial={prefersReduced ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => ctx.onOpenChange(false)}
                    />
                    <motion.div
                        className={cn(
                            "bg-background border-border fixed top-0 z-50 h-full w-72 p-6 shadow-xl",
                            isRight ? "right-0 border-l" : "left-0 border-r",
                            className
                        )}
                        initial={
                            prefersReduced
                                ? false
                                : { x: isRight ? "100%" : "-100%" }
                        }
                        animate={{ x: 0 }}
                        exit={{ x: isRight ? "100%" : "-100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <button
                            type="button"
                            onClick={() => ctx.onOpenChange(false)}
                            className="text-muted hover:text-foreground focus-visible:ring-accent absolute top-4 right-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                        >
                            <X className="h-4 w-4" />
                        </button>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export { Sheet, SheetTrigger, SheetContent }
