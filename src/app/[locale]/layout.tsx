import type { Metadata } from "next"
import { NextIntlClientProvider, hasLocale } from "next-intl"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CookieBanner } from "@/components/layout/cookie-banner"
import { Toaster } from "@/components/ui/sonner"
import { displayFont, sansFont } from "../fonts"
import "../globals.css"

export const metadata: Metadata = {
    title: "LionGate Sarl",
    description: "Big and Global, Go Digital",
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

    return (
        <html
            lang={locale}
            className={`${displayFont.variable} ${sansFont.variable} h-full antialiased`}
        >
            <body className="bg-background text-foreground flex min-h-full flex-col">
                <NextIntlClientProvider>
                    <Toaster>
                        <Navbar />
                        <main className="flex-1 pt-16">{children}</main>
                        <Footer />
                        <CookieBanner />
                    </Toaster>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
