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
        <Section variant="light">
            <SectionHeading headline={t("headline")} />
            <StaggerGroup className="grid gap-x-16 gap-y-12 md:grid-cols-2">
                {items.map((item) => (
                    <FadeIn key={item.title}>
                        <div className="border-accent border-l-2 pl-8">
                            <h3 className="font-heading text-h3 text-foreground uppercase">
                                {item.title}
                            </h3>
                            <p className="text-body text-muted mt-4 max-w-md text-pretty">
                                {item.description}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </StaggerGroup>
        </Section>
    )
}
