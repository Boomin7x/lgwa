import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"

export function CosmeticsCta() {
    const t = useTranslations("cosmetics.cta")

    return (
        <Section className="text-center">
            <Reveal>
                <h2 className="font-display text-h2 text-foreground">
                    {t("title")}
                </h2>
                <p className="text-body text-muted mt-4">{t("subtitle")}</p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/contact?pole=cosmetics">
                            {t("button")}
                        </Link>
                    </Button>
                </div>
            </Reveal>
        </Section>
    )
}
