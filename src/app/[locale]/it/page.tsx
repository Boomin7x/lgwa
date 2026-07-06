import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { ItHero } from "@/components/sections/it/hero"
import { ItServices } from "@/components/sections/it/services"
import { ItMethodology } from "@/components/sections/it/methodology"
import { ItCaseStudies } from "@/components/sections/it/case-studies"
import { ItCta } from "@/components/sections/it/cta"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("it.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default function ItPage() {
    return (
        <>
            <ItHero />
            <ItServices />
            <ItMethodology />
            <ItCaseStudies />
            <ItCta />
        </>
    )
}
