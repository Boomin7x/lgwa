import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"

export function CosmeticsCategories() {
    const t = useTranslations("cosmetics.categories")
    const items = t.raw("items") as string[]

    return (
        <Section>
            <SectionHeading label={t("label")} headline={t("headline")} />
            <StaggerGroup className="grid gap-4 md:grid-cols-3">
                {items.map((item) => (
                    <FadeIn key={item}>
                        <div className="border-border rounded-sm border p-6 text-center">
                            <p className="text-foreground font-medium">
                                {item}
                            </p>
                        </div>
                    </FadeIn>
                ))}
            </StaggerGroup>
        </Section>
    )
}
