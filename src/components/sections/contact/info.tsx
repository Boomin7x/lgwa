import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { MicroLabel } from "@/components/layout/micro-label"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/config/site"
import { ExternalLink } from "lucide-react"

export function ContactInfo() {
    const t = useTranslations("contact.info")

    return (
        <Section>
            <MicroLabel className="mb-8">{t("label")}</MicroLabel>
            <Reveal>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="text-micro text-muted mb-2 tracking-[0.15em] uppercase">
                            {t("address")}
                        </p>
                        <p className="text-small text-foreground">
                            {siteConfig.contact.address}
                        </p>
                    </div>
                    <div>
                        <p className="text-micro text-muted mb-2 tracking-[0.15em] uppercase">
                            {t("phone")}
                        </p>
                        <p className="text-small text-foreground">
                            {siteConfig.contact.phone}
                        </p>
                    </div>
                    <div>
                        <p className="text-micro text-muted mb-2 tracking-[0.15em] uppercase">
                            {t("email")}
                        </p>
                        <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="text-small text-foreground hover:text-accent transition-colors"
                        >
                            {siteConfig.contact.email}
                        </a>
                    </div>
                    <div>
                        <p className="text-micro text-muted mb-2 tracking-[0.15em] uppercase">
                            {t("socials")}
                        </p>
                        <a
                            href={siteConfig.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-small text-foreground hover:text-accent flex items-center gap-2 transition-colors"
                        >
                            <ExternalLink className="h-3 w-3" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </Reveal>
        </Section>
    )
}
