import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { StaggerText } from "@/components/motion/stagger-text"
import { Reveal } from "@/components/motion/reveal"

export function HomeHero() {
    const t = useTranslations("home.hero")

    return (
        <Section className="flex min-h-[90vh] items-center py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                    <StaggerText
                        as="h1"
                        className="font-display text-display text-foreground"
                    >
                        {t("headline")}
                    </StaggerText>
                    <Reveal delay={0.3}>
                        <p className="text-body text-muted mt-6">
                            {t("subheadline")}
                        </p>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button size="lg" asChild>
                                <Link href="/it">{t("ctaIt")}</Link>
                            </Button>
                            <Button variant="secondary" size="lg" asChild>
                                <Link href="/cosmetics">
                                    {t("ctaCosmetics")}
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                </div>
                <Reveal direction="left" delay={0.2}>
                    <div className="hidden lg:block">
                        <div className="border-border from-accent/10 to-secondary/10 aspect-square rounded-sm border bg-gradient-to-br" />
                    </div>
                </Reveal>
            </div>
        </Section>
    )
}
