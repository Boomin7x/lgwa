import type { Metadata } from "next"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/layout/cookie-banner"
import { Toaster } from "@/components/ui/sonner"
import { displayFont, headingFont, monoFont, sansFont } from "../fonts"
import "@/lib/env"
import "../globals.css"

export const metadata: Metadata = {
    title: "LionGate Sarl",
    description: "Big and Global, Go Digital",
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ locale: string }>
}>) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }

    setRequestLocale(locale)

    return (
        <html
            lang={locale}
            dir="ltr"
            suppressHydrationWarning
            className={`${displayFont.variable} ${headingFont.variable} ${sansFont.variable} ${monoFont.variable} h-full antialiased`}
        >
            <body className="bg-background text-body-text flex min-h-full flex-col">
                <link rel="preconnect" href="https://res.cloudinary.com" />
                <NextIntlClientProvider>
                    <Toaster>
                        <Navbar />
                        <main className="flex-1">{children}</main>
                        <Footer />
                        <CookieBanner />
                    </Toaster>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
