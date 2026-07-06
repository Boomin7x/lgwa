import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"

const serviceKeys = ["devops", "odoo", "ai", "fullstack"] as const

export function ItServices() {
    const t = useTranslations("it.services")

    return (
        <Section>
            <SectionHeading label={t("label")} headline={t("headline")} />
            <StaggerGroup className="grid gap-6 md:grid-cols-2">
                {serviceKeys.map((key) => (
                    <FadeIn key={key}>
                        <div className="border-border rounded-sm border p-8">
                            <h3 className="font-display text-h4 text-accent">
                                {t(`${key}.title`)}
                            </h3>
                            <p className="text-muted mt-3">
                                {t(`${key}.description`)}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </StaggerGroup>
        </Section>
    )
}
