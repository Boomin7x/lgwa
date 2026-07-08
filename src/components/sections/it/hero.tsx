import Image from "next/image"
import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { Parallax } from "@/components/motion/parallax"

const heroImage = "/images/photo-1461749280684-dccba630e2f6.jpg"

export function ItHero() {
    const t = useTranslations("it.hero")

    return (
        <Section className="pt-36 md:pt-44">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                <Reveal>
                    <SectionHeading
                        as="h1"
                        label={t("label")}
                        slashes={1}
                        headline={t("headline")}
                        lede={t("subheadline")}
                        className="mb-0"
                    />
                </Reveal>
                <Reveal delay={0.15}>
                    <Parallax strength={28} className="aspect-4/3">
                        <Image
                            src={heroImage}
                            alt={t("imageAlt")}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="img-warm scale-110 object-cover"
                        />
                    </Parallax>
                </Reveal>
            </div>
        </Section>
    )
}
