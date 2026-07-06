import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"
import { LinkButton } from "@/components/layout/link-button"

export function HomePoles() {
    const t = useTranslations("home.poles")

    return (
        <Section>
            <SectionHeading label={t("label")} headline="" />
            <StaggerGroup className="grid gap-8 lg:grid-cols-2">
                <FadeIn>
                    <div className="border-accent/20 bg-accent/5 rounded-sm border p-8 md:p-12">
                        <h3 className="font-display text-h3 text-accent">
                            {t("itTitle")}
                        </h3>
                        <p className="text-muted mt-4">{t("itDescription")}</p>
                        <div className="mt-6">
                            <LinkButton href="/it">{t("itCta")}</LinkButton>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn>
                    <div className="border-secondary/30 bg-secondary/10 rounded-sm border p-8 md:p-12">
                        <h3 className="font-display text-h3 text-foreground">
                            {t("cosmeticsTitle")}
                        </h3>
                        <p className="text-muted mt-4">
                            {t("cosmeticsDescription")}
                        </p>
                        <div className="mt-6">
                            <LinkButton href="/cosmetics">
                                {t("cosmeticsCta")}
                            </LinkButton>
                        </div>
                    </div>
                </FadeIn>
            </StaggerGroup>
        </Section>
    )
}
