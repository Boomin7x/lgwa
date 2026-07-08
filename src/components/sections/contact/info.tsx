import { useTranslations } from "next-intl"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"
import { ExternalLink } from "lucide-react"

export function ContactInfo() {
    const t = useTranslations("contact.info")

    return (
        <Reveal>
            <div className="border-border grid gap-8 border-t pt-10 sm:grid-cols-2">
                <div>
                    <p className="text-micro text-muted mb-2 font-mono uppercase">
                        {t("address")}
                    </p>
                    <p className="text-body text-foreground">
                        {siteConfig.contact.address}
                    </p>
                </div>
                <div>
                    <p className="text-micro text-muted mb-2 font-mono uppercase">
                        {t("phone")}
                    </p>
                    <p className="text-body text-foreground">
                        {siteConfig.contact.phone}
                    </p>
                </div>
                <div>
                    <p className="text-micro text-muted mb-2 font-mono uppercase">
                        {t("email")}
                    </p>
                    <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-body text-foreground hover:text-accent transition-colors"
                    >
                        {siteConfig.contact.email}
                    </a>
                </div>
                <div>
                    <p className="text-micro text-muted mb-2 font-mono uppercase">
                        {t("socials")}
                    </p>
                    <a
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body text-foreground hover:text-accent flex items-center gap-2 transition-colors"
                    >
                        <ExternalLink className="h-4 w-4" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </Reveal>
    )
}
