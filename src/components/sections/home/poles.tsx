import Image from "next/image"
import { cloudinaryImages } from "@/config/images"
import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"
import { LinkButton } from "@/components/layout/link-button"

const poleImages = {
    it: cloudinaryImages.engineeringTeam,
    cosmetics: cloudinaryImages.cosmeticsFlatLay,
}

export function HomePoles() {
    const t = useTranslations("home.poles")

    return (
        <Section variant="light">
            <SectionHeading headline={t("label")} />
            <StaggerGroup className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                <FadeIn>
                    <article className="group flex h-full flex-col">
                        <div className="relative aspect-16/10 overflow-hidden">
                            <Image
                                src={poleImages.it}
                                alt={t("itImageAlt")}
                                fill
                                quality={60}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="img-warm ease-editorial object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                        </div>
                        <h3 className="font-heading text-h2 text-foreground mt-8 uppercase">
                            {t("itTitle")}
                        </h3>
                        <p className="text-body text-muted mt-4 max-w-md flex-1 text-pretty">
                            {t("itDescription")}
                        </p>
                        <div className="mt-8">
                            <LinkButton href="/it">{t("itCta")}</LinkButton>
                        </div>
                    </article>
                </FadeIn>
                <FadeIn>
                    <article className="group flex h-full flex-col lg:mt-20">
                        <div className="relative aspect-16/10 overflow-hidden">
                            <Image
                                src={poleImages.cosmetics}
                                alt={t("cosmeticsImageAlt")}
                                fill
                                quality={60}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="img-warm ease-editorial object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                        </div>
                        <h3 className="font-heading text-h2 text-foreground mt-8 uppercase">
                            {t("cosmeticsTitle")}
                        </h3>
                        <p className="text-body text-muted mt-4 max-w-md flex-1 text-pretty">
                            {t("cosmeticsDescription")}
                        </p>
                        <div className="mt-8">
                            <LinkButton href="/cosmetics">
                                {t("cosmeticsCta")}
                            </LinkButton>
                        </div>
                    </article>
                </FadeIn>
            </StaggerGroup>
        </Section>
    )
}
