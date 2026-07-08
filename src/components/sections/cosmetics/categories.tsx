import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"

export function CosmeticsCategories() {
    const t = useTranslations("cosmetics.categories")
    const items = t.raw("items") as string[]

    return (
        <Section variant="light" className="pt-0 md:pt-0">
            <SectionHeading headline={t("headline")} />
            <StaggerGroup className="border-border grid border-t md:grid-cols-2 md:gap-x-16">
                {items.map((item) => (
                    <FadeIn key={item}>
                        <div className="group border-border flex items-baseline justify-between gap-6 border-b py-7">
                            <p className="font-heading text-h3 text-foreground group-hover:text-accent uppercase transition-colors duration-300">
                                {item}
                            </p>
                            <span
                                aria-hidden
                                className="text-accent font-mono text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            >
                                {"//"}
                            </span>
                        </div>
                    </FadeIn>
                ))}
            </StaggerGroup>
        </Section>
    )
}
