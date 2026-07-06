import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { ContactInfo } from "@/components/sections/contact/info"
import { ContactForm } from "@/components/sections/contact/form"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("contact.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function ContactPage() {
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
