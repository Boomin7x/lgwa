"use client"

import { useState, Suspense } from "react"
import { useTranslations, useLocale } from "next-intl"
import { useSearchParams } from "next/navigation"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { getReferences } from "@/lib/content/references"

function FilterBar({ onFilter }: { onFilter: (s: string) => void }) {
    const t = useTranslations("references.filter")
    const searchParams = useSearchParams()
    const active = searchParams.get("sector") || ""

    const sectors = [
        { key: "all", label: t("all") },
        { key: "e-commerce", label: "E-commerce" },
        { key: "logistics", label: "Logistique" },
        { key: "finance", label: "Finance" },
        { key: "healthcare", label: "Santé" },
        { key: "telecom", label: "Télécom" },
        { key: "education", label: "Éducation" },
    ]

    return (
        <div className="mb-8 flex flex-wrap gap-2">
            {sectors.map((s) => (
                <Button
                    key={s.key}
                    variant={
                        active === s.key || (s.key === "all" && !active)
                            ? "primary"
                            : "ghost"
                    }
                    size="sm"
                    onClick={() => onFilter(s.key === "all" ? "" : s.key)}
                >
                    {s.label}
                </Button>
            ))}
        </div>
    )
}

export function ReferencesGrid() {
    const t = useTranslations("references")
    const locale = useLocale() as "fr" | "en"
    const [filter, setFilter] = useState("")
    const refs = getReferences()
    const filtered = filter ? refs.filter((r) => r.tags.includes(filter)) : refs

    return (
        <Section className="pt-32">
            <SectionHeading
                label={t("hero.label")}
                headline={t("hero.headline")}
                lede={t("hero.subheadline")}
            />
            <Suspense fallback={null}>
                <FilterBar onFilter={setFilter} />
            </Suspense>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((ref) => (
                    <Reveal key={ref.id}>
                        <div className="border-border rounded-sm border p-6">
                            <p className="text-foreground font-medium">
                                {ref.client}
                            </p>
                            <p className="text-micro text-accent mt-1 tracking-[0.15em] uppercase">
                                {ref.sector[locale]}
                            </p>
                            <p className="text-small text-muted mt-3">
                                {ref.description[locale]}
                            </p>
                            <div className="border-border mt-4 border-t pt-4">
                                <p className="text-small text-foreground font-medium">
                                    {t("detail.outcome")}
                                </p>
                                <p className="text-small text-muted mt-1">
                                    {ref.outcome[locale]}
                                </p>
                            </div>
                            <div className="text-micro text-muted mt-3 flex items-center justify-between">
                                <span>{ref.location}</span>
                                <span>{ref.tags.slice(0, 2).join(", ")}</span>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}
