import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { ReferencesGrid } from "@/components/sections/references/grid"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("references.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default function ReferencesPage() {
    return <ReferencesGrid />
}
