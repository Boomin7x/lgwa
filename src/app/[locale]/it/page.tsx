import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { ItHero } from "@/components/sections/it/hero"
import { ItServices } from "@/components/sections/it/services"
import { ItMethodology } from "@/components/sections/it/methodology"
import { ItCaseStudies } from "@/components/sections/it/case-studies"
import { ItCta } from "@/components/sections/it/cta"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "it.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function ItPage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
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
