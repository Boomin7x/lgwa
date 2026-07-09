import Image from "next/image"
import { cloudinaryImages } from "@/config/images"
import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Parallax } from "@/components/motion/parallax"

const heroImage = cloudinaryImages.cosmeticsProducts

export function CosmeticsHero() {
    const t = useTranslations("cosmetics.hero")

    return (
        <Section className="pt-36 md:pt-44">
            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <div className="hero-entrance order-2 [animation-delay:150ms] lg:order-1">
                    <Parallax strength={28} className="aspect-4/3">
                        <Image
                            src={heroImage}
                            alt={t("imageAlt")}
                            fill
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="img-warm scale-110 object-cover"
                        />
                    </Parallax>
                </div>
                <div className="hero-entrance-rise order-1 lg:order-2">
                    <SectionHeading
                        as="h1"
                        label={t("label")}
                        slashes={1}
                        headline={t("headline")}
                        lede={t("subheadline")}
                        className="mb-0"
                    />
                </div>
            </div>
        </Section>
    )
}
