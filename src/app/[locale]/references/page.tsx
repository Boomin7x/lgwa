import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { ReferencesGrid } from "@/components/sections/references/grid"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "references.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function ReferencesPage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    return <ReferencesGrid />
}
