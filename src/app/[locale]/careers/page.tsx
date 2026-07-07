import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { CareersIntro } from "@/components/sections/careers/intro"
import { CareersCulture } from "@/components/sections/careers/culture"
import { CareersVacancies } from "@/components/sections/careers/vacancies"
import { CareersApplicationForm } from "@/components/sections/careers/application-form"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "careers.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function CareersPage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    return (
        <>
            <CareersIntro />
            <CareersCulture />
            <CareersVacancies />
            <CareersApplicationForm />
        </>
    )
}
