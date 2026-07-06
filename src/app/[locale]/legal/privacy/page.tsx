import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Reveal } from "@/components/motion/reveal"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("legal.privacy.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function PrivacyPage() {
    const t = await getTranslations("legal.privacy")

    return (
        <Section className="pt-32">
            <Reveal>
                <h1 className="font-display text-h1 text-foreground">
                    {t("title")}
                </h1>
                <div className="text-body text-muted mt-8 max-w-2xl leading-relaxed whitespace-pre-line">
                    {t("content")}
                </div>
            </Reveal>
        </Section>
    )
}
