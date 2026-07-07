"use client"

import { useState } from "react"
import { usePathname } from "@/i18n/navigation"
import { Menu } from "lucide-react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { mainNavLinks } from "@/config/nav"
import { LocaleSwitcher } from "./locale-switcher"

export function Navbar() {
    const t = useTranslations()
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <header className="border-border bg-background/95 fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-sm">
            <nav
                aria-label={t("siteName")}
                className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-8"
            >
                <Link href="/" className="font-display text-accent text-xl">
                    LionGate
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {mainNavLinks.map((link) => {
                        const href = `/${link.href.replace(/^\//, "")}`
                        const isActive =
                            pathname.endsWith(href) ||
                            (href === "/" && pathname === "/")
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`hover:text-accent text-sm transition-colors duration-200 ${
                                    isActive ? "text-accent" : "text-muted"
                                }`}
                            >
                                {t(link.label)}
                            </Link>
                        )
                    })}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <LocaleSwitcher />
                    </div>
                    <div className="hidden md:block">
                        <Button size="sm" asChild>
                            <Link href="/contact">
                                {t("common.nav.contact")}
                            </Link>
                        </Button>
                    </div>
                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger className="text-foreground p-2">
                                <Menu className="h-5 w-5" />
                            </SheetTrigger>
                            <SheetContent>
                                <div className="mt-8 flex flex-col gap-4">
                                    {mainNavLinks.map((link) => {
                                        const href = `/${link.href.replace(/^\//, "")}`
                                        const isActive =
                                            pathname.endsWith(href) ||
                                            (href === "/" && pathname === "/")
                                        return (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setOpen(false)}
                                                className={`hover:text-accent text-sm transition-colors ${
                                                    isActive
                                                        ? "text-accent"
                                                        : "text-muted"
                                                }`}
                                            >
                                                {t(link.label)}
                                            </Link>
                                        )
                                    })}
                                    <div className="border-border border-t pt-4">
                                        <LocaleSwitcher />
                                    </div>
                                    <Button size="sm" asChild>
                                        <Link
                                            href="/contact"
                                            onClick={() => setOpen(false)}
                                        >
                                            {t("common.nav.contact")}
                                        </Link>
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}
