import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"

export function CosmeticsHero() {
    const t = useTranslations("cosmetics.hero")

    return (
        <Section
            className="flex min-h-[60vh] items-center pt-32"
            variant="bordeaux"
        >
            <Reveal>
                <SectionHeading
                    label={t("label")}
                    headline={t("headline")}
                    lede={t("subheadline")}
                />
            </Reveal>
        </Section>
    )
}
