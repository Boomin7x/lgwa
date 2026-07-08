import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { MicroLabel } from "@/components/layout/micro-label"
import { StaggerText } from "@/components/motion/stagger-text"
import { Reveal } from "@/components/motion/reveal"
import { Parallax } from "@/components/motion/parallax"
import { ScrollFade } from "@/components/motion/scroll-fade"

const heroImage = "/images/photo-1494412574643-ff11b0a5c1c3.jpg"

export function HomeHero() {
    const t = useTranslations("home.hero")
    const tCommon = useTranslations("common")

    return (
        <section className="surface-dark relative flex min-h-dvh items-end overflow-hidden">
            <div className="absolute inset-0">
                <Parallax className="h-full" strength={64}>
                    <Image
                        src={heroImage}
                        alt={t("imageAlt")}
                        fill
                        priority
                        sizes="100vw"
                        className="img-warm scale-110 object-cover"
                    />
                </Parallax>
                <div aria-hidden className="bg-ink/50 absolute inset-0" />
                <div
                    aria-hidden
                    className="from-ink via-ink/70 absolute inset-0 bg-linear-to-t to-transparent"
                />
                <div
                    aria-hidden
                    className="from-ink/70 absolute inset-x-0 top-0 h-36 bg-linear-to-b to-transparent"
                />
            </div>
            <div className="relative mx-auto w-full max-w-[1440px] px-5 pt-24 pb-20 sm:px-8 md:pb-28">
                <ScrollFade>
                    <Reveal>
                        <MicroLabel slashes={1} className="mb-8">
                            {tCommon("tagline")}
                        </MicroLabel>
                    </Reveal>
                    <StaggerText
                        as="h1"
                        delay={0.1}
                        className="font-display text-hero text-foreground max-w-5xl uppercase"
                    >
                        {t("headline")}
                    </StaggerText>
                    <Reveal delay={0.35}>
                        <p className="text-body text-body-text mt-8 max-w-xl text-pretty">
                            {t("subheadline")}
                        </p>
                    </Reveal>
                    <Reveal delay={0.5}>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <Button size="lg" asChild>
                                <Link href="/it">{t("ctaIt")}</Link>
                            </Button>
                            <Button variant="secondary" size="lg" asChild>
                                <Link href="/cosmetics">
                                    {t("ctaCosmetics")}
                                </Link>
                            </Button>
                        </div>
                    </Reveal>
                </ScrollFade>
            </div>
        </section>
    )
}
