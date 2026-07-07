import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { CosmeticsHero } from "@/components/sections/cosmetics/hero"
import { CosmeticsActivity } from "@/components/sections/cosmetics/activity"
import { CosmeticsCategories } from "@/components/sections/cosmetics/categories"
import { CosmeticsPartnership } from "@/components/sections/cosmetics/partnership"
import { CosmeticsCta } from "@/components/sections/cosmetics/cta"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "cosmetics.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function CosmeticsPage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    return (
        <>
            <CosmeticsHero />
            <CosmeticsActivity />
            <CosmeticsCategories />
            <CosmeticsPartnership />
            <CosmeticsCta />
        </>
    )
}
