import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
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
        <Section className="py-14 md:py-16">
            <Reveal>
                <div className="border-border border-y py-10">
                    <p className="text-micro text-muted mb-8 text-center font-mono uppercase">
                        {t("label")}
                    </p>
                    <ul className="flex flex-wrap items-baseline justify-center gap-x-14 gap-y-5">
                        {partners.map((name) => (
                            <li
                                key={name}
                                className="font-heading text-h3 text-foreground/55 hover:text-foreground uppercase transition-colors duration-300"
                            >
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </Section>
    )
}
