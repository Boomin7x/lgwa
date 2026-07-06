import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"

export function ItHero() {
    const t = useTranslations("it.hero")

    return (
        <Section className="flex min-h-[60vh] items-center pt-32">
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
