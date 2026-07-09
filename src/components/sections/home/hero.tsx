import Image from "next/image"
import { cloudinaryImages } from "@/config/images"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { MicroLabel } from "@/components/layout/micro-label"
import { Parallax } from "@/components/motion/parallax"
import { ScrollFade } from "@/components/motion/scroll-fade"

const heroImage = cloudinaryImages.portOfDouala

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
                        fetchPriority="high"
                        quality={45}
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
                    <div className="hero-entrance">
                        <MicroLabel slashes={1} className="mb-8">
                            {tCommon("tagline")}
                        </MicroLabel>
                    </div>
                    <h1 className="hero-entrance-rise font-display text-hero text-foreground max-w-5xl uppercase">
                        {t("headline")}
                    </h1>
                    <div className="hero-entrance [animation-delay:200ms]">
                        <p className="text-body text-body-text mt-8 max-w-xl text-pretty">
                            {t("subheadline")}
                        </p>
                    </div>
                    <div className="hero-entrance mt-10 flex flex-wrap gap-4 [animation-delay:320ms]">
                        <Button size="lg" asChild>
                            <Link href="/it">{t("ctaIt")}</Link>
                        </Button>
                        <Button variant="secondary" size="lg" asChild>
                            <Link href="/cosmetics">{t("ctaCosmetics")}</Link>
                        </Button>
                    </div>
                </ScrollFade>
            </div>
        </section>
    )
}
