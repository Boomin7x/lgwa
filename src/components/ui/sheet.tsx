"use client"

import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import { useTranslations } from "next-intl"
import {
    createContext,
    useContext,
    useCallback,
    useEffect,
    useRef,
    type ReactNode,
} from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"
import { useMounted } from "@/components/ui/use-mounted"
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
    "aria-label"?: string
}

function SheetTrigger({
    children,
    className,
    "aria-label": ariaLabel,
}: SheetTriggerProps) {
    const ctx = useContext(SheetContext)
    if (!ctx) throw new Error("SheetTrigger must be inside Sheet")

    return (
        <button
            type="button"
            aria-label={ariaLabel}
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
    const t = useTranslations("common")
    const prefersReduced = useReducedMotion()
    const panelRef = useRef<HTMLDivElement>(null)
    const mounted = useMounted()
    const open = ctx?.open ?? false

    useEffect(() => {
        if (open) {
            panelRef.current?.focus()
        }
    }, [open])

    if (!ctx) throw new Error("SheetContent must be inside Sheet")
    if (!mounted) return null

    const isRight = side === "right"

    return createPortal(
        <AnimatePresence>
            {ctx.open && (
                <div className="fixed inset-0 z-60 flex">
                    <motion.div
                        className="bg-ink/70 fixed inset-0 backdrop-blur-sm"
                        initial={prefersReduced ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => ctx.onOpenChange(false)}
                    />
                    <motion.div
                        ref={panelRef}
                        tabIndex={-1}
                        role="dialog"
                        aria-modal="true"
                        className={cn(
                            "bg-ink-raised border-border fixed top-0 flex h-full w-[78%] max-w-sm flex-col p-6 shadow-xl outline-none",
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
                        transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <button
                            type="button"
                            aria-label={t("close")}
                            onClick={() => ctx.onOpenChange(false)}
                            className="border-border text-foreground hover:border-foreground/50 focus-visible:ring-accent absolute top-6 right-6 flex size-10 items-center justify-center border transition-colors focus-visible:ring-2 focus-visible:outline-none"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}

export { Sheet, SheetTrigger, SheetContent }
