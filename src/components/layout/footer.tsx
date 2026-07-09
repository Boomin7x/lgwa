import { useTranslations } from "next-intl"
import { ExternalLink } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { mainNavLinks } from "@/config/nav"
import { siteConfig } from "@/config/site"

export function Footer() {
    const t = useTranslations()
    const year = new Date().getFullYear()

    return (
        <footer className="border-border surface-dark overflow-hidden border-t px-5 pt-24 pb-8 sm:px-8">
            <div className="mx-auto max-w-[1440px]">
                <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <div>
                        <p className="font-heading text-h2 text-foreground max-w-xs uppercase">
                            {t("common.footer.tagline")}
                        </p>
                        <a
                            href={siteConfig.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-colors"
                            aria-label="LinkedIn"
                        >
                            <ExternalLink className="h-4 w-4" />
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    <nav aria-label={t("common.footer.navHeading")}>
                        <h3 className="text-micro text-accent mb-6 font-mono uppercase">
                            {t("common.footer.navHeading")}
                        </h3>
                        <ul className="space-y-3">
                            {mainNavLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted hover:text-foreground text-sm transition-colors"
                                    >
                                        {t(link.label)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h3 className="text-micro text-accent mb-6 font-mono uppercase">
                            {t("common.footer.contactHeading")}
                        </h3>
                        <div className="text-muted space-y-3 text-sm">
                            <p>{siteConfig.contact.address}</p>
                            <p>
                                <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="hover:text-foreground transition-colors"
                                >
                                    {siteConfig.contact.email}
                                </a>
                            </p>
                            <p>{siteConfig.contact.phone}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-micro text-accent mb-6 font-mono uppercase">
                            {t("common.footer.legalHeading")}
                        </h3>
                        <div className="space-y-3">
                            <Link
                                href="/legal/privacy"
                                className="text-muted hover:text-foreground block text-sm transition-colors"
                            >
                                {t("common.nav.privacy")}
                            </Link>
                            <Link
                                href="/legal/terms"
                                className="text-muted hover:text-foreground block text-sm transition-colors"
                            >
                                {t("common.nav.terms")}
                            </Link>
                        </div>
                    </div>
                </div>

                <div
                    aria-hidden
                    className="wordmark-text font-display text-wordmark text-foreground/6 pointer-events-none mt-24 -mb-6 text-center whitespace-nowrap uppercase select-none"
                />

                <div className="border-border text-muted flex flex-col items-center justify-between gap-3 border-t pt-8 text-xs md:flex-row">
                    <p>
                        &copy; {year} {t("common.footer.copyright")}
                    </p>
                    <p className="text-micro font-mono uppercase">
                        {t("common.tagline")}
                    </p>
                </div>
            </div>
        </footer>
    )
}
