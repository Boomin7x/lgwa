import Image from "next/image"
import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { Parallax } from "@/components/motion/parallax"

const introImage = "/images/photo-1477959858617-67f85cf4f1df.jpg"

export function AboutIntro() {
    const t = useTranslations("about.intro")

    return (
        <Section className="pt-36 md:pt-44">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
                <Reveal>
                    <SectionHeading
                        as="h1"
                        label={t("label")}
                        slashes={1}
                        headline={t("headline")}
                        lede={t("content")}
                        className="mb-0"
                    />
                </Reveal>
                <Reveal delay={0.15}>
                    <Parallax strength={28} className="aspect-4/5">
                        <Image
                            src={introImage}
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
