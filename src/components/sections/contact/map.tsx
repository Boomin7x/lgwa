"use client"

import { useSyncExternalStore } from "react"
import dynamic from "next/dynamic"
import { useTranslations } from "next-intl"
import { ExternalLink } from "lucide-react"
import { getConsent, onConsentChange } from "@/components/layout/cookie-banner"
import { siteConfig } from "@/config/site"

const OSM_LINK_URL =
    "https://www.openstreetmap.org/?mlat=4.0511&mlon=9.7679#map=12/4.0511/9.7679"

const LeafletMap = dynamic(
    () => import("./leaflet-map").then((mod) => mod.LeafletMap),
    {
        ssr: false,
        loading: () => (
            <div className="border-border bg-surface-raised mt-6 h-80 w-full animate-pulse border" />
        ),
    }
)

function getServerConsent() {
    return "unset" as const
}

export function ContactMap() {
    const t = useTranslations("contact.map")
    const consent = useSyncExternalStore(
        onConsentChange,
        getConsent,
        getServerConsent
    )
    const consented = consent === "granted"

    return (
        <div className="mt-16">
            <h2 className="font-heading text-h3 text-foreground uppercase">
                {t("title")}
            </h2>
            {consented ? (
                <LeafletMap label={t("title")} />
            ) : (
                <div className="border-border mt-6 flex h-80 w-full flex-col items-center justify-center gap-4 rounded-sm border px-8 text-center">
                    <p className="text-body text-muted max-w-md">
                        {t("consentNote")}
                    </p>
                    <p className="text-small text-foreground">
                        {siteConfig.contact.address}
                    </p>
                </div>
            )}
            <a
                href={OSM_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-muted hover:text-accent mt-3 inline-flex items-center gap-2 transition-colors"
            >
                <ExternalLink className="h-4 w-4" />
                {t("open")}
            </a>
        </div>
    )
}
