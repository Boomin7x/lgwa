import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"

export function AboutPresence() {
    const t = useTranslations("about.presence")

    return (
        <Section variant="bordeaux">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <Reveal>
                    <SectionHeading
                        label={t("label")}
                        headline={t("headline")}
                        lede={t("content")}
                    />
                    <div className="mt-6">
                        <Button asChild>
                            <Link href="/contact">{t("cta")}</Link>
                        </Button>
                    </div>
                </Reveal>
                <Reveal direction="left">
                    <div className="bg-muted/10 aspect-video rounded-sm" />
                </Reveal>
            </div>
        </Section>
    )
}
