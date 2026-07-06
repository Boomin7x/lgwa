import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"

export function CareersCulture() {
    const t = useTranslations("careers.culture")

    return (
        <Section>
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
