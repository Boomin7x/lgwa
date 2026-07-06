import { useTranslations, useLocale } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { LinkButton } from "@/components/layout/link-button"
import { getReferences } from "@/lib/content/references"

export function HomeReferencesTeaser() {
    const t = useTranslations("home.references")
    const locale = useLocale() as "fr" | "en"
    const refs = getReferences().slice(0, 3)

    return (
        <Section>
            <SectionHeading label={t("label")} headline={t("title")} />
            <div className="grid gap-6 md:grid-cols-3">
                {refs.map((ref) => (
                    <Reveal key={ref.id}>
                        <div className="border-border rounded-sm border p-6">
                            <p className="text-foreground font-medium">
                                {ref.client}
                            </p>
                            <p className="text-small text-muted mt-1">
                                {ref.sector[locale]}
                            </p>
                            <p className="text-small text-muted mt-3">
                                {ref.outcome[locale]}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
            <div className="mt-8">
                <LinkButton href="/references">{t("cta")}</LinkButton>
            </div>
        </Section>
    )
}
