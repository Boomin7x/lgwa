import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { ContactInfo } from "@/components/sections/contact/info"
import { ContactForm } from "@/components/sections/contact/form"
import { ContactMap } from "@/components/sections/contact/map"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"

type PageProps = {
    params: Promise<{ locale: Locale }>
    searchParams: Promise<{ pole?: string; intent?: string }>
}

export async function generateMetadata({
    params,
}: Pick<PageProps, "params">): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "contact.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

function parsePole(value?: string): "it" | "cosmetics" | undefined {
    return value === "it" || value === "cosmetics" ? value : undefined
}

function parseIntent(value?: string): "quote" | undefined {
    return value === "quote" ? value : undefined
}

export default async function ContactPage({ params, searchParams }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    const { pole, intent } = await searchParams
    const heroT = await getTranslations("contact.hero")

    return (
        <Section className="pt-36 md:pt-44">
            <SectionHeading
                as="h1"
                label={heroT("label")}
                slashes={1}
                headline={heroT("headline")}
                lede={heroT("subheadline")}
            />
            <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
                <div>
                    <ContactInfo />
                    <ContactMap />
                </div>
                <ContactForm
                    initialPole={parsePole(pole)}
                    intent={parseIntent(intent)}
                />
            </div>
        </Section>
    )
}
