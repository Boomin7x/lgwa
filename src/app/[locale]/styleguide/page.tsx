"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Section } from "@/components/layout/section"
import { MicroLabel } from "@/components/layout/micro-label"
import { SectionHeading } from "@/components/layout/section-heading"
import { LinkButton } from "@/components/layout/link-button"
import { Reveal } from "@/components/motion/reveal"
import { StaggerText } from "@/components/motion/stagger-text"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { FadeIn } from "@/components/motion/fade-in"
import { Parallax } from "@/components/motion/parallax"
import { useToast } from "@/components/ui/sonner"

const inkSwatches = [
    { name: "Ink", className: "bg-ink border-border border" },
    { name: "Ink raised", className: "bg-ink-raised" },
    { name: "Gold", className: "bg-gold text-ink" },
    { name: "Gold soft", className: "bg-gold-soft text-ink" },
    { name: "Gold deep", className: "bg-gold-deep text-paper" },
    { name: "Bordeaux", className: "bg-bordeaux text-paper" },
    { name: "Paper", className: "bg-paper text-ink" },
    { name: "Paper raised", className: "bg-paper-raised text-ink" },
]

const demoImage = "/images/photo-1494412574643-ff11b0a5c1c3.jpg"

const listRows = [
    { no: "01", title: "Editorial list row", detail: "Hairline dividers" },
    { no: "02", title: "Condensed headings", detail: "Gold on hover only" },
    { no: "03", title: "Sober rhythm", detail: "One accent per moment" },
]

const statBlocks = [
    { value: "120+", label: "Delivered projects" },
    { value: "15", label: "Active partners" },
    { value: "6", label: "Countries served" },
]

function SurfaceDemo({ title }: { title: string }) {
    return (
        <div>
            <MicroLabel className="mb-4">{title}</MicroLabel>
            <p className="font-heading text-h3 text-foreground uppercase">
                Heading on this surface
            </p>
            <p className="text-body text-body-text mt-2 max-w-md">
                Body text keeps a verified AA pair against every band the site
                uses.
            </p>
            <p className="text-small text-muted mt-1">
                Muted text stays legible too.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
            </div>
        </div>
    )
}

export default function StyleguidePage() {
    const { toast } = useToast()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [accordionValue, setAccordionValue] = useState("")

    return (
        <div className="pt-16">
            <Section className="pb-0 md:pb-0">
                <MicroLabel slashes={1} className="mb-8">
                    Design system
                </MicroLabel>
                <StaggerText
                    as="h1"
                    className="font-display text-mega text-foreground uppercase"
                >
                    Styleguide
                </StaggerText>
            </Section>

            <Section>
                <SectionHeading headline="Color tokens" />
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {inkSwatches.map((swatch) => (
                        <div
                            key={swatch.name}
                            className={`flex h-32 items-end p-4 ${swatch.className}`}
                        >
                            <span className="font-mono text-xs uppercase">
                                {swatch.name}
                            </span>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <SectionHeading headline="Type stack" />
                <div className="space-y-10">
                    <div>
                        <p className="text-micro text-muted mb-2 font-mono uppercase">
                            Anton, mega display
                        </p>
                        <p className="font-display text-hero text-foreground uppercase">
                            Big and global
                        </p>
                    </div>
                    <div>
                        <p className="text-micro text-muted mb-2 font-mono uppercase">
                            Bebas Neue, headings
                        </p>
                        <p className="font-heading text-display text-foreground uppercase">
                            Section heading scale
                        </p>
                        <p className="font-heading text-h2 text-foreground mt-3 uppercase">
                            Card and block headings
                        </p>
                    </div>
                    <div>
                        <p className="text-micro text-muted mb-2 font-mono uppercase">
                            IBM Plex Sans, body
                        </p>
                        <p className="text-body text-body-text max-w-2xl">
                            Body copy stays mixed-case and quiet next to the
                            condensed uppercase display faces, holding a
                            comfortable measure for long-form reading.
                        </p>
                    </div>
                    <div>
                        <p className="text-micro text-muted mb-2 font-mono uppercase">
                            IBM Plex Mono, labels
                        </p>
                        <MicroLabel slashes={3}>Slash section label</MicroLabel>
                    </div>
                </div>
            </Section>

            <Section variant="light">
                <SurfaceDemo title="Light surface" />
            </Section>

            <Section variant="bordeaux">
                <SurfaceDemo title="Bordeaux surface" />
            </Section>

            <Section>
                <SectionHeading headline="Imagery treatment" />
                <div className="grid gap-10 md:grid-cols-2">
                    <div>
                        <Parallax strength={24} className="aspect-16/10">
                            <Image
                                src={demoImage}
                                alt="Container terminal photographed with the warm site-wide grade"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="img-warm scale-110 object-cover"
                            />
                        </Parallax>
                        <p className="text-micro text-muted mt-4 font-mono uppercase">
                            Warm grade + scroll parallax
                        </p>
                    </div>
                    <div className="group">
                        <div className="relative aspect-16/10 overflow-hidden">
                            <Image
                                src={demoImage}
                                alt="Container terminal demonstrating the hover zoom treatment"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="img-warm ease-editorial object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                        </div>
                        <p className="text-micro text-muted mt-4 font-mono uppercase">
                            Hover zoom, editorial easing
                        </p>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeading headline="Editorial patterns" />
                <div className="border-border divide-border divide-y border-t">
                    {listRows.map((row) => (
                        <div
                            key={row.no}
                            className="group grid gap-2 py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10"
                        >
                            <span
                                aria-hidden
                                className="font-heading text-h3 text-accent"
                            >
                                {row.no}
                            </span>
                            <h3 className="font-heading text-h3 text-foreground group-hover:text-accent uppercase transition-colors duration-300">
                                {row.title}
                            </h3>
                            <p className="text-small text-muted">
                                {row.detail}
                            </p>
                        </div>
                    ))}
                </div>
                <dl className="border-border mt-24 grid grid-cols-1 gap-x-8 gap-y-14 border-t pt-14 sm:grid-cols-3">
                    {statBlocks.map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                            <dt className="text-micro text-muted order-2 mt-3 font-mono uppercase">
                                {stat.label}
                            </dt>
                            <dd className="font-heading text-display text-foreground order-1">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </Section>

            <Section>
                <SectionHeading headline="Buttons and links" />
                <div className="flex flex-wrap items-center gap-4">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <LinkButton href="/styleguide">Arrow link</LinkButton>
                </div>
            </Section>

            <Section>
                <SectionHeading headline="Form elements" />
                <div className="bg-surface-raised grid max-w-lg gap-6 p-7 sm:p-10">
                    <div className="space-y-2">
                        <Label htmlFor="sg-input">Label</Label>
                        <Input id="sg-input" placeholder="Placeholder text" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="sg-textarea">Textarea</Label>
                        <Textarea
                            id="sg-textarea"
                            placeholder="Enter your message"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="sg-select">Select</Label>
                        <Select id="sg-select">
                            <option value="">Choose an option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                        </Select>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeading headline="Accordion" />
                <div className="border-border max-w-lg border-t">
                    <Accordion
                        type="single"
                        value={accordionValue}
                        onValueChange={setAccordionValue}
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="font-heading text-h4 uppercase">
                                Section one
                            </AccordionTrigger>
                            <AccordionContent>
                                Content for section one. This demonstrates the
                                accordion component with motion animation.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="font-heading text-h4 uppercase">
                                Section two
                            </AccordionTrigger>
                            <AccordionContent>
                                Content for section two with different text.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Section>

            <Section>
                <SectionHeading headline="Dialog and toast" />
                <div className="flex flex-wrap gap-4">
                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                        <DialogTrigger>
                            <Button>Open dialog</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Dialog title</DialogTitle>
                            </DialogHeader>
                            <p className="text-muted mt-3 text-sm">
                                This is a dialog content area. Press Escape or
                                click outside to close.
                            </p>
                        </DialogContent>
                    </Dialog>
                    <Button
                        variant="secondary"
                        onClick={() => toast("Success notification", "success")}
                    >
                        Success toast
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => toast("Error notification", "error")}
                    >
                        Error toast
                    </Button>
                </div>
            </Section>

            <Section>
                <SectionHeading headline="Motion" />
                <StaggerGroup className="grid gap-6 md:grid-cols-3">
                    {["Reveal", "Stagger", "Editorial ease"].map((label) => (
                        <FadeIn key={label}>
                            <div className="bg-surface-raised p-8">
                                <p className="text-micro text-accent font-mono uppercase">
                                    {label}
                                </p>
                                <p className="text-small text-muted mt-3">
                                    Every entrance uses cubic-bezier(0.16, 1,
                                    0.3, 1) and collapses to static under
                                    reduced motion.
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerGroup>
                <Reveal className="mt-10">
                    <p className="text-small text-muted max-w-xl">
                        Scroll-linked motion is reserved for hero imagery
                        (parallax), the hero exit (scrubbed fade), and the blog
                        reading progress bar.
                    </p>
                </Reveal>
            </Section>
        </div>
    )
}
