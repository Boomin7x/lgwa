import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"

const presenceImage = "/images/photo-1578575437130-527eed3abbec.avif"

export function AboutPresence() {
    const t = useTranslations("about.presence")
    const facts = t.raw("facts") as Array<{
        title: string
        description: string
    }>

    return (
        <Section>
            <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
                <Reveal>
                    <h2 className="font-heading text-display text-foreground uppercase">
                        {t("headline")}
                    </h2>
                    <p className="text-body text-muted mt-8 max-w-xl text-pretty">
                        {t("content")}
                    </p>
                    <div className="mt-10">
                        <Button asChild>
                            <Link href="/contact">{t("cta")}</Link>
                        </Button>
                    </div>
                </Reveal>
                <Reveal direction="left" delay={0.15}>
                    <div className="relative mb-10 aspect-16/10 overflow-hidden">
                        <Image
                            src={presenceImage}
                            alt={t("imageAlt")}
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            className="img-warm object-cover"
                        />
                    </div>
                    <dl className="border-border divide-border divide-y border-t">
                        {facts.map((fact) => (
                            <div key={fact.title} className="py-7">
                                <dt className="font-heading text-h3 text-foreground uppercase">
                                    {fact.title}
                                </dt>
                                <dd className="text-small text-muted mt-3 max-w-sm text-pretty">
                                    {fact.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </Reveal>
            </div>
        </Section>
    )
}
