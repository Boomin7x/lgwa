import { useTranslations } from "next-intl"
import { ExternalLink } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { mainNavLinks } from "@/config/nav"
import { siteConfig } from "@/config/site"

export function Footer() {
    const t = useTranslations()
    const year = new Date().getFullYear()

    return (
        <footer className="border-border bg-background border-t px-8 py-16">
            <div className="mx-auto max-w-[1440px]">
                <div className="grid gap-12 md:grid-cols-3">
                    <div>
                        <p className="font-display text-accent text-2xl">
                            {t("common.footer.tagline")}
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href={siteConfig.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted hover:text-accent flex items-center gap-2 text-sm transition-colors"
                                aria-label="LinkedIn"
                            >
                                <ExternalLink className="h-4 w-4" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-muted mb-4 text-sm font-medium tracking-[0.15em] uppercase">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            {mainNavLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted hover:text-accent text-sm transition-colors"
                                    >
                                        {t(link.label)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-muted mb-4 text-sm font-medium tracking-[0.15em] uppercase">
                            {t("common.footer.contactHeading")}
                        </h3>
                        <div className="text-muted space-y-2 text-sm">
                            <p>{siteConfig.contact.address}</p>
                            <p>
                                <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="hover:text-accent transition-colors"
                                >
                                    {siteConfig.contact.email}
                                </a>
                            </p>
                            <p>{siteConfig.contact.phone}</p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-muted mb-4 text-sm font-medium tracking-[0.15em] uppercase">
                                {t("common.footer.legalHeading")}
                            </h3>
                            <div className="space-y-2">
                                <Link
                                    href="/legal/privacy"
                                    className="text-muted hover:text-accent block text-sm transition-colors"
                                >
                                    {t("common.nav.privacy")}
                                </Link>
                                <Link
                                    href="/legal/terms"
                                    className="text-muted hover:text-accent block text-sm transition-colors"
                                >
                                    {t("common.nav.terms")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-border text-muted mt-16 border-t pt-8 text-center text-xs">
                    <p>
                        &copy; {year} {t("common.footer.copyright")}
                    </p>
                </div>
            </div>
        </footer>
    )
}
