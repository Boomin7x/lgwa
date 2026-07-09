import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { Section } from "@/components/layout/section"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "legal.terms.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function TermsPage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    const t = await getTranslations("legal.terms")

    return (
        <Section className="pt-36 md:pt-44">
            <div className="hero-entrance-rise">
                <h1 className="font-heading text-h1 text-foreground uppercase">
                    {t("title")}
                </h1>
                <div className="text-body text-body-text mt-8 max-w-2xl leading-relaxed whitespace-pre-line">
                    {t("content")}
                </div>
            </div>
        </Section>
    )
}
