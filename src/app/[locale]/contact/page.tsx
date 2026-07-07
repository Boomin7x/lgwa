import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { ContactInfo } from "@/components/sections/contact/info"
import { ContactForm } from "@/components/sections/contact/form"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "contact.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function ContactPage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    const heroT = await getTranslations("contact.hero")

    return (
        <Section className="pt-32">
            <SectionHeading
                label={heroT("label")}
                headline={heroT("headline")}
                lede={heroT("subheadline")}
            />
            <ContactInfo />
            <ContactForm />
        </Section>
    )
}
