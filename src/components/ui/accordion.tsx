"use client"

import { AnimatePresence, motion } from "motion/react"
import { ChevronDown } from "lucide-react"
import { createContext, useContext, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type AccordionContextValue = {
    openValue: string | null
    toggle: (value: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

type AccordionItemContextValue = {
    itemValue: string
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(
    null
)

type AccordionProps = {
    type: "single"
    value?: string
    onValueChange?: (value: string) => void
    className?: string
    children: ReactNode
}

function Accordion({
    value: controlledValue,
    onValueChange,
    className,
    children,
}: AccordionProps) {
    const [internalValue, setInternalValue] = useState<string | null>(null)
    const openValue = controlledValue ?? internalValue

    function toggle(val: string) {
        const next = openValue === val ? "" : val
        if (controlledValue === undefined) {
            setInternalValue(next || null)
        }
        onValueChange?.(next)
    }

    return (
        <AccordionContext.Provider
            value={{ openValue: openValue || null, toggle }}
        >
            <div className={cn("w-full", className)}>{children}</div>
        </AccordionContext.Provider>
    )
}

type AccordionItemProps = {
    value: string
    className?: string
    children: ReactNode
}

function AccordionItem({ value, className, children }: AccordionItemProps) {
    return (
        <AccordionItemContext.Provider value={{ itemValue: value }}>
            <div className={cn("border-border border-b", className)}>
                {children}
            </div>
        </AccordionItemContext.Provider>
    )
}

type AccordionTriggerProps = {
    children: ReactNode
    className?: string
}

function AccordionTrigger({ children, className }: AccordionTriggerProps) {
    const accordion = useContext(AccordionContext)
    const item = useContext(AccordionItemContext)
    if (!accordion || !item) {
        throw new Error("AccordionTrigger must be inside AccordionItem")
    }

    const isOpen = accordion.openValue === item.itemValue

    return (
        <button
            type="button"
            onClick={() => accordion.toggle(item.itemValue)}
            className={cn(
                "text-foreground hover:text-accent focus-visible:ring-accent flex w-full items-center justify-between py-4 text-left font-medium transition-all focus-visible:ring-2 focus-visible:outline-none",
                className
            )}
        >
            {children}
            <ChevronDown
                className={cn(
                    "h-4 w-4 shrink-0 transition-transform duration-300",
                    isOpen && "rotate-180"
                )}
            />
        </button>
    )
}

type AccordionContentProps = {
    children: ReactNode
    className?: string
}

function AccordionContent({ children, className }: AccordionContentProps) {
    const accordion = useContext(AccordionContext)
    const item = useContext(AccordionItemContext)
    if (!accordion || !item) {
        throw new Error("AccordionContent must be inside AccordionItem")
    }

    const isOpen = accordion.openValue === item.itemValue

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className={cn("text-muted pb-4", className)}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
