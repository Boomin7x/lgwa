import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"

export function BlogIndexHero() {
    const t = useTranslations("blog.hero")

    return (
        <Section className="pt-32">
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
