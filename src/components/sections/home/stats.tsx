import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { MicroLabel } from "@/components/layout/micro-label"
import { Reveal } from "@/components/motion/reveal"

const stats = [
    { key: "clients", value: "50+" },
    { key: "projects", value: "120+" },
    { key: "partners", value: "15" },
    { key: "countries", value: "6" },
] as const

export function HomeStats() {
    const t = useTranslations("home.stats")

    return (
        <Section variant="bordeaux">
            <MicroLabel className="mb-8 justify-center">
                {t("label")}
            </MicroLabel>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat, i) => (
                    <Reveal key={stat.key} delay={i * 0.1}>
                        <div className="text-center">
                            <p className="font-display text-display text-accent">
                                {stat.value}
                            </p>
                            <p className="text-muted mt-2 text-sm">
                                {t(stat.key)}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}
