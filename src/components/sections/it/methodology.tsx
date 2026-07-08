import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"

export function ItMethodology() {
    const t = useTranslations("it.methodology")

    return (
        <Section>
            <Reveal>
                <h2 className="font-heading text-display text-foreground max-w-4xl uppercase">
                    {t("headline")}
                </h2>
                <p className="text-body text-body-text border-accent mt-10 max-w-2xl border-l-2 pl-8 text-pretty md:text-lg">
                    {t("content")}
                </p>
            </Reveal>
        </Section>
    )
}
