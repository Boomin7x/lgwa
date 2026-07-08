import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import {
    ReferencesGrid,
    parseSector,
} from "@/components/sections/references/grid"

type PageProps = {
    params: Promise<{ locale: Locale }>
    searchParams: Promise<{ sector?: string }>
}

export async function generateMetadata({
    params,
}: Pick<PageProps, "params">): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "references.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function ReferencesPage({
    params,
    searchParams,
}: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    const { sector } = await searchParams
    return <ReferencesGrid sector={parseSector(sector)} />
}
