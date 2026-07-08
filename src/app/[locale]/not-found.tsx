import { getTranslations } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

export default async function NotFound() {
    const t = await getTranslations("notFound")

    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-5 text-center sm:px-8">
            <p className="font-display text-mega text-accent uppercase">404</p>
            <h1 className="font-heading text-h2 text-foreground mt-6 uppercase">
                {t("title")}
            </h1>
            <p className="text-body text-muted mt-4 max-w-md">
                {t("description")}
            </p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/">{t("cta")}</Link>
                </Button>
            </div>
        </div>
    )
}
