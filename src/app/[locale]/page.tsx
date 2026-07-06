import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { HomeHero } from "@/components/sections/home/hero"
import { HomePoles } from "@/components/sections/home/poles"
import { HomeStats } from "@/components/sections/home/stats"
import { HomePartners } from "@/components/sections/home/partners"
import { HomeReferencesTeaser } from "@/components/sections/home/references-teaser"
import { HomeBlogTeaser } from "@/components/sections/home/blog-teaser"
import { HomeCta } from "@/components/sections/home/cta"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("home.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <HomePoles />
            <HomeStats />
            <HomePartners />
            <HomeReferencesTeaser />
            <HomeBlogTeaser />
            <HomeCta />
        </>
    )
}
