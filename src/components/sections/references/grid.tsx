import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { getReferences } from "@/lib/content/references"
import { ReferenceDetail } from "./detail"

const filterableSectors = [
    "e-commerce",
    "logistics",
    "finance",
    "healthcare",
    "devops",
    "digitalization",
    "education",
] as const

type FilterableSector = (typeof filterableSectors)[number]

export function parseSector(value?: string): FilterableSector | undefined {
    return filterableSectors.find((sector) => sector === value)
}

type ReferencesGridProps = {
    sector?: FilterableSector
}

export async function ReferencesGrid({ sector }: ReferencesGridProps) {
    const t = await getTranslations("references")
    const refs = getReferences()
    const filtered = sector
        ? refs.filter((ref) => ref.tags.includes(sector))
        : refs

    return (
        <Section className="pt-36 md:pt-44">
            <SectionHeading
                as="h1"
                label={t("hero.label")}
                slashes={1}
                headline={t("hero.headline")}
                lede={t("hero.subheadline")}
            />
            <nav
                aria-label={t("filter.label")}
                className="mb-12 flex flex-wrap gap-2"
            >
                <Link
                    href="/references"
                    aria-current={!sector ? "page" : undefined}
                    className={`border px-4 py-2 font-mono text-[11px] tracking-widest uppercase transition-colors ${
                        !sector
                            ? "border-accent bg-accent text-background"
                            : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
                    }`}
                >
                    {t("filter.all")}
                </Link>
                {filterableSectors.map((key) => (
                    <Link
                        key={key}
                        href={`/references?sector=${key}`}
                        aria-current={sector === key ? "page" : undefined}
                        className={`border px-4 py-2 font-mono text-[11px] tracking-widest uppercase transition-colors ${
                            sector === key
                                ? "border-accent bg-accent text-background"
                                : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
                        }`}
                    >
                        {t(`sectors.${key}`)}
                    </Link>
                ))}
            </nav>
            {filtered.length === 0 ? (
                <p className="text-body text-muted">{t("empty")}</p>
            ) : (
                <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((ref) => (
                        <Reveal key={ref.id}>
                            <ReferenceDetail reference={ref} />
                        </Reveal>
                    ))}
                </div>
            )}
        </Section>
    )
}
