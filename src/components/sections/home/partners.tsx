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

function PartnerTrack({ hidden }: { hidden?: boolean }) {
    return (
        <ul
            aria-hidden={hidden || undefined}
            className="flex shrink-0 items-baseline"
        >
            {partners.map((name) => (
                <li
                    key={name}
                    className="font-heading text-h3 text-foreground/55 hover:text-foreground px-10 whitespace-nowrap uppercase transition-colors duration-300 md:px-14"
                >
                    {name}
                </li>
            ))}
        </ul>
    )
}

export function HomePartners() {
    const t = useTranslations("home.partners")

    return (
        <Section className="py-14 md:py-16">
            <Reveal>
                <div className="border-border border-0 py-10">
                    <p className="text-micro text-muted mb-8 text-center font-mono uppercase">
                        {t("label")}
                    </p>
                    <div className="edge-fade overflow-hidden">
                        <div className="animate-marquee flex w-max">
                            <PartnerTrack />
                            <PartnerTrack hidden />
                        </div>
                    </div>
                </div>
            </Reveal>
        </Section>
    )
}
