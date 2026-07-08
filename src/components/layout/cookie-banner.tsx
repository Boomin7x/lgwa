"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { AnimatePresence, motion } from "motion/react"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"

type ConsentState = "granted" | "declined" | "unset"

const STORAGE_KEY = "lg-consent"

function getStoredConsent(): ConsentState {
    if (typeof window === "undefined") return "unset"
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "granted" || stored === "declined") return stored
    return "unset"
}

let consentSubscribers: Array<(state: ConsentState) => void> = []
let currentConsent: ConsentState = "unset"

export function getConsent(): ConsentState {
    return currentConsent
}

export function onConsentChange(cb: (state: ConsentState) => void) {
    consentSubscribers.push(cb)
    return () => {
        consentSubscribers = consentSubscribers.filter((s) => s !== cb)
    }
}

function notifySubscribers(state: ConsentState) {
    currentConsent = state
    consentSubscribers.forEach((cb) => cb(state))
}

export function CookieBanner() {
    const t = useTranslations("common.cookie")
    const [visible, setVisible] = useState(false)
    const prefersReduced = useReducedMotion()

    useEffect(() => {
        const stored = getStoredConsent()
        if (stored === "unset") {
            const timer = setTimeout(() => setVisible(true), 500)
            return () => clearTimeout(timer)
        }
        notifySubscribers(stored)
    }, [])

    function handleChoice(choice: "granted" | "declined") {
        localStorage.setItem(STORAGE_KEY, choice)
        notifySubscribers(choice)
        setVisible(false)
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="border-border bg-background fixed right-0 bottom-0 left-0 z-50 border-t px-8 py-4"
                    initial={prefersReduced ? false : { y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    role="alertdialog"
                    aria-label={t("message")}
                >
                    <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4">
                        <p className="text-muted text-sm">
                            {t("message")}{" "}
                            <Link
                                href="/legal/privacy"
                                className="text-foreground hover:text-accent underline underline-offset-4 transition-colors"
                            >
                                {t("policyLink")}
                            </Link>
                        </p>
                        <div className="flex gap-3">
                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={() => handleChoice("declined")}
                            >
                                {t("decline")}
                            </Button>
                            <Button
                                size="sm"
                                onClick={() => handleChoice("granted")}
                            >
                                {t("accept")}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
