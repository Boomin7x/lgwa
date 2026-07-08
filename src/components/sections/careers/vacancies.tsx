"use client"

import { useTranslations, useLocale } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import { getVacancies } from "@/lib/content/vacancies"

export function CareersVacancies() {
    const t = useTranslations("careers.vacancies")
    const locale = useLocale() as "fr" | "en"
    const vacancies = getVacancies()

    return (
        <Section>
            <SectionHeading headline={t("headline")} />
            {vacancies.length === 0 ? (
                <p className="text-muted">{t("noVacancies")}</p>
            ) : (
                <Accordion
                    type="single"
                    className="border-border max-w-3xl border-t"
                >
                    {vacancies.map((v) => (
                        <AccordionItem key={v.id} value={v.id}>
                            <AccordionTrigger className="font-heading text-h4 uppercase">
                                {v.title[locale]}
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <div className="text-small grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-muted">
                                                {t("department")}:
                                            </span>
                                            <p className="text-foreground">
                                                {v.department[locale]}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-muted">
                                                {t("type")}:
                                            </span>
                                            <p className="text-foreground">
                                                {v.type[locale]}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-muted">
                                                {t("location")}:
                                            </span>
                                            <p className="text-foreground">
                                                {v.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-small text-muted mb-1">
                                            {t("requirements")}:
                                        </p>
                                        <p className="text-small text-foreground">
                                            {v.requirements[locale]}
                                        </p>
                                    </div>
                                    <p className="text-small text-muted">
                                        {v.description[locale]}
                                    </p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            )}
        </Section>
    )
}
