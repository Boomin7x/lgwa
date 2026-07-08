import Image from "next/image"
import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"

const services = [
    {
        key: "devops",
        image: "/images/photo-1558494949-ef010cbdcc31.jpg",
    },
    {
        key: "odoo",
        image: "/images/photo-1551288049-bebda4e38f71.jpg",
    },
    {
        key: "ai",
        image: "/images/photo-1620712943543-bcc4688e7485.jpg",
    },
    {
        key: "fullstack",
        image: "/images/photo-1498050108023-c5249f4df085.jpg",
    },
] as const

export function ItServices() {
    const t = useTranslations("it.services")

    return (
        <Section variant="light">
            <SectionHeading headline={t("headline")} />
            <StaggerGroup className="border-border divide-border divide-y border-t">
                {services.map((service, i) => (
                    <FadeIn key={service.key}>
                        <article className="group grid gap-8 py-12 md:grid-cols-[auto_1fr_320px] md:gap-12 md:py-14">
                            <span
                                aria-hidden
                                className="font-heading text-h2 text-accent pt-1"
                            >
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div>
                                <h3 className="font-heading text-h2 text-foreground uppercase">
                                    {t(`${service.key}.title`)}
                                </h3>
                                <p className="text-body text-muted mt-4 max-w-xl text-pretty">
                                    {t(`${service.key}.description`)}
                                </p>
                            </div>
                            <div className="relative aspect-4/3 overflow-hidden md:self-center">
                                <Image
                                    src={service.image}
                                    alt={t(`${service.key}.imageAlt`)}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 320px"
                                    className="img-warm ease-editorial object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                />
                            </div>
                        </article>
                    </FadeIn>
                ))}
            </StaggerGroup>
        </Section>
    )
}
