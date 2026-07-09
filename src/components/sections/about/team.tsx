import Image from "next/image"
import { cloudinaryImages } from "@/config/images"
import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"

const memberImages = [
    cloudinaryImages.teamPortraitOne,
    cloudinaryImages.teamPortraitTwo,
    cloudinaryImages.teamPortraitThree,
] as const

export function AboutTeam() {
    const t = useTranslations("about.team")
    const members = t.raw("members") as Array<{
        role: string
        area: string
        imageAlt: string
    }>

    return (
        <Section variant="light" className="pt-0 md:pt-0">
            <SectionHeading headline={t("headline")} />
            <StaggerGroup className="grid gap-x-8 gap-y-12 md:grid-cols-3">
                {members.map((member, i) => (
                    <FadeIn key={member.role}>
                        <figure>
                            <div className="relative aspect-3/4 overflow-hidden">
                                <Image
                                    src={memberImages[i] ?? memberImages[0]}
                                    alt={member.imageAlt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover grayscale"
                                />
                            </div>
                            <figcaption className="mt-6">
                                <p className="text-micro text-accent font-mono uppercase">
                                    {member.area}
                                </p>
                                <h3 className="font-heading text-h3 text-foreground mt-2 uppercase">
                                    {member.role}
                                </h3>
                            </figcaption>
                        </figure>
                    </FadeIn>
                ))}
            </StaggerGroup>
        </Section>
    )
}
