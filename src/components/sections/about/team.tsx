import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"

export function AboutTeam() {
    const t = useTranslations("about.team")

    return (
        <Section>
            <SectionHeading label={t("label")} headline={t("headline")} />
            <Reveal>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="text-center">
                        <div className="bg-muted/20 mx-auto h-32 w-32 rounded-sm" />
                        <h3 className="text-foreground mt-4 font-medium">
                            Directeur Technique
                        </h3>
                        <p className="text-small text-muted">IT & Software</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-muted/20 mx-auto h-32 w-32 rounded-sm" />
                        <h3 className="text-foreground mt-4 font-medium">
                            Directeur Commercial
                        </h3>
                        <p className="text-small text-muted">Distribution</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-muted/20 mx-auto h-32 w-32 rounded-sm" />
                        <h3 className="text-foreground mt-4 font-medium">
                            Directrice Administrative
                        </h3>
                        <p className="text-small text-muted">Opérations</p>
                    </div>
                </div>
            </Reveal>
        </Section>
    )
}
