import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { HomeHero } from "@/components/sections/home/hero"
import { HomePoles } from "@/components/sections/home/poles"
import { HomeStats } from "@/components/sections/home/stats"
import { HomePartners } from "@/components/sections/home/partners"
import { HomeReferencesTeaser } from "@/components/sections/home/references-teaser"
import { HomeBlogTeaser } from "@/components/sections/home/blog-teaser"
import { HomeCta } from "@/components/sections/home/cta"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "home.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function HomePage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    return (
        <>
            <HomeHero />
            <HomePartners />
            <HomePoles />
            <HomeStats />
            <HomeReferencesTeaser />
            <HomeBlogTeaser />
            <HomeCta />
        </>
    )
}
