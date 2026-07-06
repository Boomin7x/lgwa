import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"

export function ItCta() {
    const t = useTranslations("it.cta")

    return (
        <Section variant="bordeaux" className="text-center">
            <Reveal>
                <h2 className="font-display text-h2 text-foreground">
                    {t("title")}
                </h2>
                <p className="text-body text-muted mt-4">{t("subtitle")}</p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button size="lg" asChild>
                        <Link href="/contact?pole=it">{t("discuss")}</Link>
                    </Button>
                    <Button variant="secondary" size="lg" asChild>
                        <Link href="/contact?pole=it&intent=quote">
                            {t("quote")}
                        </Link>
                    </Button>
                </div>
            </Reveal>
        </Section>
    )
}
