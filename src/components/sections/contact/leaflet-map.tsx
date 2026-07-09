"use client"

import "leaflet/dist/leaflet.css"
import { useMemo } from "react"
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet"
import { siteConfig } from "@/config/site"

const DOUALA_CENTER: [number, number] = [4.0511, 9.7679]
const TILE_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
const TILE_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'

function useThemeColor(variable: string) {
    return useMemo(
        () =>
            getComputedStyle(document.documentElement)
                .getPropertyValue(variable)
                .trim(),
        [variable]
    )
}

export function LeafletMap({ label }: { label: string }) {
    const gold = useThemeColor("--color-gold")

    return (
        <MapContainer
            center={DOUALA_CENTER}
            zoom={12}
            scrollWheelZoom={false}
            aria-label={label}
            className="border-border z-0 mt-6 h-80 w-full border"
        >
            <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />
            <CircleMarker
                center={DOUALA_CENTER}
                radius={9}
                pathOptions={{
                    color: gold,
                    fillColor: gold,
                    fillOpacity: 0.85,
                    weight: 2,
                }}
            >
                <Tooltip permanent direction="top" offset={[0, -10]}>
                    {siteConfig.name}
                </Tooltip>
            </CircleMarker>
        </MapContainer>
    )
}
