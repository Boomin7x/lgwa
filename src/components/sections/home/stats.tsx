import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
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
        <Section variant="light" className="pt-0 md:pt-0">
            <dl className="border-border grid grid-cols-2 gap-x-8 gap-y-14 border-t pt-14 md:grid-cols-4">
                {stats.map((stat, i) => (
                    <Reveal key={stat.key} delay={i * 0.08}>
                        <div className="flex flex-col">
                            <dt className="text-micro text-muted order-2 mt-3 font-mono uppercase">
                                {t(stat.key)}
                            </dt>
                            <dd className="font-heading text-display text-foreground order-1">
                                {stat.value}
                            </dd>
                        </div>
                    </Reveal>
                ))}
            </dl>
        </Section>
    )
}
