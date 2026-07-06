import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"

export function AboutIntro() {
    const t = useTranslations("about.intro")

    return (
        <Section className="flex min-h-[60vh] items-center pt-32">
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
