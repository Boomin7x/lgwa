import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"

export function AboutValues() {
    const t = useTranslations("about.values")
    const items = t.raw("items") as Array<{
        title: string
        description: string
    }>

    return (
        <Section>
            <SectionHeading label={t("label")} headline={t("headline")} />
            <StaggerGroup className="grid gap-6 md:grid-cols-2">
                {items.map((item) => (
                    <FadeIn key={item.title}>
                        <div className="border-border rounded-sm border p-8">
                            <h3 className="font-display text-h4 text-accent">
                                {item.title}
                            </h3>
                            <p className="text-muted mt-3">
                                {item.description}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </StaggerGroup>
        </Section>
    )
}
