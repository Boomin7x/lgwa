import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { MicroLabel } from "@/components/layout/micro-label"
import { Reveal } from "@/components/motion/reveal"

const partners = [
    "PALIGO",
    "AfriTel",
    "MicroFinance SA",
    "Port Autonome",
    "EduTech",
]

export function HomePartners() {
    const t = useTranslations("home.partners")

    return (
        <Section>
            <MicroLabel className="mb-12 justify-center">
                {t("label")}
            </MicroLabel>
            <Reveal>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 md:gap-16">
                    {partners.map((name) => (
                        <span
                            key={name}
                            className="text-muted text-sm font-medium tracking-[0.15em] uppercase"
                        >
                            {name}
                        </span>
                    ))}
                </div>
            </Reveal>
        </Section>
    )
}
