import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"

export function BlogIndexHero() {
    const t = useTranslations("blog.hero")

    return (
        <Section className="pt-36 pb-0 md:pt-44 md:pb-0">
            <div className="hero-entrance-rise">
                <SectionHeading
                    as="h1"
                    label={t("label")}
                    slashes={1}
                    headline={t("headline")}
                    lede={t("subheadline")}
                    className="mb-0"
                />
            </div>
        </Section>
    )
}
