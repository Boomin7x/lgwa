import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { AboutIntro } from "@/components/sections/about/intro"
import { AboutValues } from "@/components/sections/about/values"
import { AboutTeam } from "@/components/sections/about/team"
import { AboutPresence } from "@/components/sections/about/presence"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("about.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default function AboutPage() {
    return (
        <>
            <AboutIntro />
            <AboutValues />
            <AboutTeam />
            <AboutPresence />
        </>
    )
}
