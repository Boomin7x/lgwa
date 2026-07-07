import type { MessageKey } from "@/types/i18n"

export interface NavLink {
    label: MessageKey
    href: string
}

export const mainNavLinks: NavLink[] = [
    { label: "common.nav.home", href: "/" },
    { label: "common.nav.about", href: "/about" },
    { label: "common.nav.it", href: "/it" },
    { label: "common.nav.cosmetics", href: "/cosmetics" },
    { label: "common.nav.references", href: "/references" },
    { label: "common.nav.careers", href: "/careers" },
    { label: "common.nav.blog", href: "/blog" },
    { label: "common.nav.contact", href: "/contact" },
]

export const legalNavLinks: NavLink[] = [
    { label: "common.nav.privacy", href: "/legal/privacy" },
    { label: "common.nav.terms", href: "/legal/terms" },
]
