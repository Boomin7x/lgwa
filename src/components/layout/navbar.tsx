"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import { useReducedMotion } from "@/components/motion/use-reduced-motion"
import { usePathname } from "@/i18n/navigation"
import { Menu } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { mainNavLinks } from "@/config/nav"
import { cn } from "@/lib/utils"
import { LocaleSwitcher } from "./locale-switcher"

export function Navbar() {
    const t = useTranslations()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const prefersReduced = useReducedMotion()
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 24)
    })

    return (
        <header
            className={cn(
                "ease-editorial fixed top-0 right-0 left-0 z-40 transition-colors duration-300",
                scrolled
                    ? "border-border bg-background/90 border-b backdrop-blur-xl"
                    : "border-b border-transparent bg-transparent"
            )}
        >
            <nav
                aria-label={t("common.siteName")}
                className="mx-auto flex h-16 max-w-360 items-center justify-between px-5 sm:px-8"
            >
                <Link
                    href="/"
                    className="font-heading text-foreground flex items-center gap-3 text-2xl uppercase"
                >
                    <Image
                        src="/brand/emblem.png"
                        alt=""
                        aria-hidden
                        width={40}
                        height={40}
                        priority
                    />
                    LionGate
                    <span aria-hidden className="text-accent -ml-3">
                        .
                    </span>
                </Link>

                <div className="hidden items-center gap-6 lg:flex xl:gap-8">
                    {mainNavLinks.map((link) => {
                        const href = `/${link.href.replace(/^\//, "")}`
                        const isActive =
                            pathname.endsWith(href) ||
                            (href === "/" && pathname === "/")
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-mono text-[11px] tracking-widest uppercase transition-colors duration-200 ${
                                    isActive
                                        ? "text-accent"
                                        : "text-muted hover:text-foreground"
                                }`}
                            >
                                {t(link.navLabel ?? link.label)}
                            </Link>
                        )
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden lg:block">
                        <LocaleSwitcher />
                    </div>
                    <div className="hidden lg:block">
                        <Button size="sm" asChild>
                            <Link href="/contact">
                                {t("common.nav.contact")}
                            </Link>
                        </Button>
                    </div>
                    <div className="lg:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger
                                aria-label={t("common.nav.menu")}
                                className="border-border text-foreground hover:border-foreground/50 flex size-10 items-center justify-center border transition-colors"
                            >
                                <Menu className="h-5 w-5" />
                            </SheetTrigger>
                            <SheetContent>
                                <div className="flex min-h-0 flex-1 flex-col pb-[env(safe-area-inset-bottom)]">
                                    <div className="flex h-10 items-center gap-3">
                                        <Image
                                            src="/brand/emblem.png"
                                            alt=""
                                            width={32}
                                            height={32}
                                            className="h-8 w-8"
                                        />
                                        <span className="font-heading text-foreground text-2xl uppercase">
                                            LionGate
                                            <span
                                                aria-hidden
                                                className="text-accent"
                                            >
                                                .
                                            </span>
                                        </span>
                                    </div>
                                    <div className="mt-12 flex flex-col gap-5">
                                        {mainNavLinks.map((link, i) => {
                                            const href = `/${link.href.replace(/^\//, "")}`
                                            const isActive =
                                                pathname.endsWith(href) ||
                                                (href === "/" &&
                                                    pathname === "/")
                                            return (
                                                <motion.div
                                                    key={link.href}
                                                    initial={
                                                        prefersReduced
                                                            ? false
                                                            : {
                                                                  opacity: 0,
                                                                  x: 24,
                                                              }
                                                    }
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: 0.08 + i * 0.05,
                                                        ease: [0.16, 1, 0.3, 1],
                                                    }}
                                                >
                                                    <Link
                                                        href={link.href}
                                                        onClick={() =>
                                                            setOpen(false)
                                                        }
                                                        className={`font-heading hover:text-accent text-3xl uppercase transition-colors ${
                                                            isActive
                                                                ? "text-accent"
                                                                : "text-foreground"
                                                        }`}
                                                    >
                                                        {t(
                                                            link.navLabel ??
                                                                link.label
                                                        )}
                                                    </Link>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                    <div className="border-border mt-auto flex flex-col gap-5 border-t pt-6">
                                        <LocaleSwitcher />
                                        <Button className="w-full" asChild>
                                            <Link
                                                href="/contact"
                                                onClick={() => setOpen(false)}
                                            >
                                                {t("common.nav.contact")}
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}
