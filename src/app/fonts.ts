import localFont from "next/font/local"

export const displayFont = localFont({
    src: "./fonts/anton-latin-400-normal.woff2",
    variable: "--font-anton",
    display: "swap",
    preload: true,
})

export const headingFont = localFont({
    src: "./fonts/bebas-neue-latin-400-normal.woff2",
    variable: "--font-bebas-neue",
    display: "swap",
    preload: true,
})

export const sansFont = localFont({
    src: [
        {
            path: "./fonts/ibm-plex-sans-latin-400-normal.woff2",
            weight: "400",
        },
        {
            path: "./fonts/ibm-plex-sans-latin-500-normal.woff2",
            weight: "500",
        },
        {
            path: "./fonts/ibm-plex-sans-latin-600-normal.woff2",
            weight: "600",
        },
    ],
    variable: "--font-ibm-plex-sans",
    display: "swap",
    preload: true,
})

export const monoFont = localFont({
    src: [
        {
            path: "./fonts/ibm-plex-mono-latin-400-normal.woff2",
            weight: "400",
        },
        {
            path: "./fonts/ibm-plex-mono-latin-500-normal.woff2",
            weight: "500",
        },
    ],
    variable: "--font-ibm-plex-mono",
    display: "swap",
    preload: false,
})
