import Image from "next/image"
import { cloudinaryImages } from "@/config/images"
import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"

const cultureImage = cloudinaryImages.officeCollaboration

export function CareersCulture() {
    const t = useTranslations("careers.culture")

    return (
        <Section variant="light">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal>
                    <div className="relative aspect-16/10 overflow-hidden">
                        <Image
                            src={cultureImage}
                            alt={t("imageAlt")}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="img-warm object-cover"
                        />
                    </div>
                </Reveal>
                <Reveal direction="left" delay={0.15}>
                    <h2 className="font-heading text-display text-foreground uppercase">
                        {t("headline")}
                    </h2>
                    <p className="text-body text-body-text mt-8 max-w-xl text-pretty md:text-lg">
                        {t("content")}
                    </p>
                </Reveal>
            </div>
        </Section>
    )
}
