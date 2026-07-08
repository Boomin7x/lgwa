"use client"

import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import { useTranslations } from "next-intl"
import {
    createContext,
    useContext,
    useCallback,
    useEffect,
    type ReactNode,
} from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"

type DialogContextValue = {
    open: boolean
    onOpenChange: (open: boolean) => void
}

const DialogContext = createContext<DialogContextValue | null>(null)

type DialogProps = {
    open: boolean
    onOpenChange: (open: boolean) => void
    children: ReactNode
}

function Dialog({ open, onOpenChange, children }: DialogProps) {
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
        <DialogContext.Provider value={{ open, onOpenChange }}>
            {children}
        </DialogContext.Provider>
    )
}

type DialogTriggerProps = {
    children: ReactNode
    className?: string
}

function DialogTrigger({ children, className }: DialogTriggerProps) {
    const ctx = useContext(DialogContext)
    if (!ctx) throw new Error("DialogTrigger must be inside Dialog")

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

type DialogContentProps = {
    children: ReactNode
    className?: string
}

function DialogContent({ children, className }: DialogContentProps) {
    const ctx = useContext(DialogContext)
    const prefersReduced = useReducedMotion()
    const t = useTranslations("common")
    if (!ctx) throw new Error("DialogContent must be inside Dialog")

    return (
        <AnimatePresence>
            {ctx.open && (
                <div className="fixed inset-0 z-60 flex items-center justify-center">
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
                            "border-border bg-background relative z-50 w-full max-w-lg rounded-sm border p-6 shadow-xl",
                            className
                        )}
                        initial={
                            prefersReduced ? false : { opacity: 0, scale: 0.95 }
                        }
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            type="button"
                            aria-label={t("close")}
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

type DialogHeaderProps = {
    children: ReactNode
    className?: string
}

function DialogHeader({ children, className }: DialogHeaderProps) {
    return <div className={cn("mb-4", className)}>{children}</div>
}

type DialogTitleProps = {
    children: ReactNode
    className?: string
}

function DialogTitle({ children, className }: DialogTitleProps) {
    return (
        <h2
            className={cn(
                "font-heading text-foreground text-3xl uppercase",
                className
            )}
        >
            {children}
        </h2>
    )
}

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle }
