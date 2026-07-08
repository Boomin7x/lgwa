import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"

export function CosmeticsCta() {
    const t = useTranslations("cosmetics.cta")

    return (
        <Section variant="bordeaux">
            <Reveal>
                <div className="max-w-4xl">
                    <h2 className="font-heading text-display text-foreground uppercase">
                        {t("title")}
                    </h2>
                    <p className="text-body text-body-text mt-6 max-w-xl text-pretty">
                        {t("subtitle")}
                    </p>
                    <div className="mt-10">
                        <Button size="lg" asChild>
                            <Link href="/contact?pole=cosmetics">
                                {t("button")}
                            </Link>
                        </Button>
                    </div>
                </div>
            </Reveal>
        </Section>
    )
}
