import { useTranslations, useLocale } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"
import { LinkButton } from "@/components/layout/link-button"
import { getReferences } from "@/lib/content/references"

export function ItCaseStudies() {
    const t = useTranslations("it.cases")
    const locale = useLocale() as "fr" | "en"
    const refs = getReferences().slice(0, 3)

    return (
        <Section>
            <SectionHeading label={t("label")} headline={t("headline")} />
            <StaggerGroup className="grid gap-6 md:grid-cols-3">
                {refs.map((ref) => (
                    <FadeIn key={ref.id}>
                        <div className="border-border rounded-sm border p-6">
                            <p className="text-foreground font-medium">
                                {ref.client}
                            </p>
                            <p className="text-small text-muted mt-1">
                                {ref.sector[locale]}
                            </p>
                            <p className="text-small text-muted mt-3 line-clamp-3">
                                {ref.description[locale]}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </StaggerGroup>
            <div className="mt-8">
                <LinkButton href="/references">{t("viewAll")}</LinkButton>
            </div>
        </Section>
    )
}
