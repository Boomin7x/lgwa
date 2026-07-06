import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"

export function ItMethodology() {
    const t = useTranslations("it.methodology")

    return (
        <Section variant="bordeaux">
            <Reveal>
                <SectionHeading
                    label={t("label")}
                    headline={t("headline")}
                    lede={t("content")}
                />
            </Reveal>
        </Section>
    )
}
