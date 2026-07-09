"use client"

import { useState } from "react"
import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { MapPin } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import type { ProjectReference } from "@/types/content"

type ReferenceDetailProps = {
    reference: ProjectReference
}

export function ReferenceDetail({ reference }: ReferenceDetailProps) {
    const t = useTranslations("references.detail")
    const locale = useLocale()
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="group focus-visible:ring-accent block h-full w-full text-left focus-visible:ring-2 focus-visible:outline-none"
            >
                <span className="relative block aspect-16/10 overflow-hidden">
                    <Image
                        src={reference.image}
                        alt={reference.imageAlt[locale]}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="img-warm ease-editorial object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                </span>
                <span className="text-micro text-accent mt-6 block font-mono uppercase">
                    {reference.sector[locale]}
                </span>
                <span className="font-heading text-h3 text-foreground group-hover:text-accent mt-2 block uppercase transition-colors duration-300">
                    {reference.client}
                </span>
                <span className="text-small text-muted mt-3 line-clamp-2 block">
                    {reference.description[locale]}
                </span>
                <span className="text-micro text-muted border-border mt-5 flex items-center justify-between border-t pt-4 font-mono uppercase">
                    <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {reference.location}
                    </span>
                    <span>{reference.tags.slice(0, 2).join(" · ")}</span>
                </span>
            </button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <div className="relative -mx-6 -mt-6 mb-6 aspect-2/1 overflow-hidden">
                        <Image
                            src={reference.image}
                            alt={reference.imageAlt[locale]}
                            fill
                            sizes="(max-width: 640px) 100vw, 512px"
                            className="img-warm object-cover"
                        />
                    </div>
                    <DialogHeader>
                        <p className="text-micro text-accent font-mono uppercase">
                            {reference.sector[locale]}
                        </p>
                        <DialogTitle className="mt-2">
                            {reference.client}
                        </DialogTitle>
                    </DialogHeader>
                    <p className="text-body text-muted">
                        {reference.description[locale]}
                    </p>
                    <div className="border-border mt-6 border-t pt-6">
                        <p className="text-micro text-muted font-mono uppercase">
                            {t("outcome")}
                        </p>
                        <p className="text-body text-accent mt-2">
                            {reference.outcome[locale]}
                        </p>
                    </div>
                    <div className="text-micro text-muted mt-6 flex flex-wrap items-center gap-3 font-mono uppercase">
                        <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {reference.location}
                        </span>
                        {reference.tags.map((tag) => (
                            <span
                                key={tag}
                                className="border-border border px-2 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}
