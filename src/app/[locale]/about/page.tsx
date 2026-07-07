import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { AboutIntro } from "@/components/sections/about/intro"
import { AboutValues } from "@/components/sections/about/values"
import { AboutTeam } from "@/components/sections/about/team"
import { AboutPresence } from "@/components/sections/about/presence"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "about.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function AboutPage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    return (
        <>
            <AboutIntro />
            <AboutValues />
            <AboutTeam />
            <AboutPresence />
        </>
    )
}
