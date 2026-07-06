import localFont from "next/font/local"

export const displayFont = localFont({
    src: "./fonts/instrument-serif-regular.woff2",
    variable: "--font-display",
    display: "swap",
    preload: true,
})

export const sansFont = localFont({
    src: [
        {
            path: "./fonts/inter-400.woff2",
            weight: "400",
        },
        {
            path: "./fonts/inter-500.woff2",
            weight: "500",
        },
        {
            path: "./fonts/inter-600.woff2",
            weight: "600",
        },
        {
            path: "./fonts/inter-700.woff2",
            weight: "700",
        },
    ],
    variable: "--font-sans",
    display: "swap",
    preload: true,
})
