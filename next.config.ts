import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const nextConfig: NextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        qualities: [45, 55, 60, 75],
        deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    },
}

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

export default withNextIntl(nextConfig)
