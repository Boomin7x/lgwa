import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"
import { LinkButton } from "@/components/layout/link-button"
import { getReferences } from "@/lib/content/references"

export function ItCaseStudies() {
    const t = useTranslations("it.cases")
    const locale = useLocale() as "fr" | "en"
    const refs = getReferences().slice(0, 3)

    return (
        <Section className="pt-0 md:pt-0">
            <SectionHeading
                label={t("label")}
                slashes={2}
                headline={t("headline")}
            />
            <StaggerGroup className="grid gap-10 md:grid-cols-3">
                {refs.map((ref) => (
                    <FadeIn key={ref.id}>
                        <article className="flex h-full flex-col">
                            <div className="relative aspect-16/10 overflow-hidden">
                                <Image
                                    src={ref.image}
                                    alt={ref.imageAlt[locale]}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="img-warm object-cover"
                                />
                            </div>
                            <p className="text-micro text-accent mt-6 font-mono uppercase">
                                {ref.sector[locale]}
                            </p>
                            <h3 className="font-heading text-h3 text-foreground mt-2 uppercase">
                                {ref.client}
                            </h3>
                            <p className="text-small text-muted mt-3 line-clamp-3">
                                {ref.outcome[locale]}
                            </p>
                        </article>
                    </FadeIn>
                ))}
            </StaggerGroup>
            <div className="mt-12">
                <LinkButton href="/references">{t("viewAll")}</LinkButton>
            </div>
        </Section>
    )
}
