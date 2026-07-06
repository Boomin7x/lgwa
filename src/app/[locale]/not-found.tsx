import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
            <p className="font-display text-display text-accent">404</p>
            <h1 className="font-display text-h2 text-foreground mt-4">
                Page introuvable
            </h1>
            <p className="text-body text-muted mt-4 max-w-md">
                La page que vous cherchez n&apos;existe pas ou a été déplacée.
            </p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/">Retour à l&apos;accueil</Link>
                </Button>
            </div>
        </div>
    )
}
