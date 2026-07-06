import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { CosmeticsHero } from "@/components/sections/cosmetics/hero"
import { CosmeticsActivity } from "@/components/sections/cosmetics/activity"
import { CosmeticsCategories } from "@/components/sections/cosmetics/categories"
import { CosmeticsPartnership } from "@/components/sections/cosmetics/partnership"
import { CosmeticsCta } from "@/components/sections/cosmetics/cta"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("cosmetics.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default function CosmeticsPage() {
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
