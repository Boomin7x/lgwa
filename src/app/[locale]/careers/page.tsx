import { getTranslations } from "next-intl/server"
import type { Metadata } from "next"
import { CareersIntro } from "@/components/sections/careers/intro"
import { CareersCulture } from "@/components/sections/careers/culture"
import { CareersVacancies } from "@/components/sections/careers/vacancies"
import { CareersApplicationForm } from "@/components/sections/careers/application-form"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("careers.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default function CareersPage() {
    return (
        <>
            <CareersIntro />
            <CareersCulture />
            <CareersVacancies />
            <CareersApplicationForm />
        </>
    )
}
