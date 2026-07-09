import { useTranslations, useLocale } from "next-intl"
import { ArrowUpRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { LinkButton } from "@/components/layout/link-button"
import { getReferences } from "@/lib/content/references"

export function HomeReferencesTeaser() {
    const t = useTranslations("home.references")
    const locale = useLocale()
    const refs = getReferences().slice(0, 3)

    return (
        <Section>
            <SectionHeading
                label={t("label")}
                slashes={2}
                headline={t("title")}
            />
            <div className="border-border divide-border divide-y border-t">
                {refs.map((ref, i) => (
                    <Reveal key={ref.id} delay={i * 0.08}>
                        <Link
                            href="/references"
                            className="group grid items-baseline gap-2 py-9 transition-colors md:grid-cols-[1.2fr_1fr_auto] md:gap-8"
                        >
                            <div>
                                <p className="font-heading text-h3 text-foreground group-hover:text-accent uppercase transition-colors duration-300">
                                    {ref.client}
                                </p>
                                <p className="text-micro text-muted mt-2 font-mono uppercase">
                                    {ref.sector[locale]}
                                </p>
                            </div>
                            <p className="text-small text-body-text max-w-md text-pretty">
                                {ref.outcome[locale]}
                            </p>
                            <ArrowUpRight
                                aria-hidden
                                className="text-muted group-hover:text-accent hidden h-5 w-5 self-center transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 md:block"
                            />
                        </Link>
                    </Reveal>
                ))}
            </div>
            <div className="mt-10">
                <LinkButton href="/references">{t("cta")}</LinkButton>
            </div>
        </Section>
    )
}
