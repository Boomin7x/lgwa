"use client"

import { AnimatePresence, motion } from "motion/react"
import { X } from "lucide-react"
import {
    createContext,
    useContext,
    useState,
    useCallback,
    type ReactNode,
} from "react"
import { cn } from "@/lib/utils"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"

type ToastType = "success" | "error" | "info"

type Toast = {
    id: string
    message: string
    type: ToastType
}

type ToastContextValue = {
    toast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

function useToast() {
    const ctx = useContext(ToastContext)
    if (!ctx) throw new Error("useToast must be used within Toaster")
    return ctx
}

type ToasterProps = {
    children: ReactNode
}

function Toaster({ children }: ToasterProps) {
    const [toasts, setToasts] = useState<Toast[]>([])
    const prefersReduced = useReducedMotion()

    const addToast = useCallback(
        (message: string, type: ToastType = "info") => {
            const id = Math.random().toString(36).slice(2)
            setToasts((prev) => [...prev, { id, message, type }])
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id))
            }, 4000)
        },
        []
    )

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toast: addToast }}>
            {children}
            <div className="fixed right-6 bottom-6 z-[100] flex flex-col gap-2">
                <AnimatePresence>
                    {toasts.map((t) => (
                        <motion.div
                            key={t.id}
                            className={cn(
                                "flex min-w-72 items-center gap-3 rounded-sm border px-4 py-3 shadow-lg",
                                t.type === "success" &&
                                    "border-accent bg-background text-foreground",
                                t.type === "error" &&
                                    "bg-background border-red-500 text-red-300",
                                t.type === "info" &&
                                    "border-border bg-background text-foreground"
                            )}
                            initial={
                                prefersReduced
                                    ? false
                                    : { opacity: 0, y: 20, scale: 0.95 }
                            }
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="flex-1 text-sm">{t.message}</span>
                            <button
                                type="button"
                                onClick={() => removeToast(t.id)}
                                className="shrink-0 text-current opacity-60 transition-opacity hover:opacity-100"
                            >
                                <X className="h-3 w-3" />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    )
}

export { Toaster, useToast }
