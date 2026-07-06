"use client"

import { Button } from "@/components/ui/button"

export default function ErrorPage({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
            <h1 className="font-display text-h2 text-foreground">
                Une erreur est survenue
            </h1>
            <p className="text-body text-muted mt-4 max-w-md">
                Quelque chose s&apos;est mal passé. Veuillez réessayer.
            </p>
            <div className="mt-8">
                <Button onClick={reset}>Réessayer</Button>
            </div>
        </div>
    )
}
