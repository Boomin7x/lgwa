"use client"

import { useState } from "react"
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
import { FadeIn } from "@/components/motion/fade-in"
import { StaggerText } from "@/components/motion/stagger-text"
import { StaggerGroup } from "@/components/motion/stagger-group"
import { useToast } from "@/components/ui/sonner"

export default function StyleguidePage() {
    const { toast } = useToast()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [accordionValue, setAccordionValue] = useState("")

    return (
        <div className="space-y-48 py-20">
            <Section>
                <StaggerText
                    as="h1"
                    className="font-display text-display text-accent"
                >
                    Styleguide
                </StaggerText>
            </Section>

            <Section>
                <SectionHeading label="Palette" headline="Color Tokens" />
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="border-border bg-background flex h-32 items-end rounded-sm border p-4">
                        <span className="text-foreground text-xs">
                            Background
                        </span>
                    </div>
                    <div className="bg-foreground flex h-32 items-end rounded-sm p-4">
                        <span className="text-background text-xs">
                            Foreground
                        </span>
                    </div>
                    <div className="bg-accent flex h-32 items-end rounded-sm p-4">
                        <span className="text-background text-xs">Accent</span>
                    </div>
                    <div className="bg-secondary flex h-32 items-end rounded-sm p-4">
                        <span className="text-foreground text-xs">
                            Secondary
                        </span>
                    </div>
                </div>
            </Section>

            <Section>
                <SectionHeading label="Typography" headline="Type Scale" />
                <div className="space-y-8">
                    <p className="font-display text-display text-foreground">
                        Display — Instrument Serif
                    </p>
                    <h1 className="text-h1 text-foreground">Heading 1</h1>
                    <h2 className="text-h2 text-foreground">Heading 2</h2>
                    <h3 className="text-h3 text-foreground">Heading 3</h3>
                    <h4 className="text-h4 text-foreground">Heading 4</h4>
                    <p className="text-body text-muted">
                        Body text — Inter. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-small text-muted">Small text</p>
                    <p className="text-micro text-muted tracking-[0.15em] uppercase">
                        Micro label
                    </p>
                </div>
            </Section>

            <Section>
                <SectionHeading label="Components" headline="Buttons" />
                <div className="flex flex-wrap gap-4">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                </div>
            </Section>

            <Section>
                <SectionHeading label="Components" headline="Form Elements" />
                <div className="grid max-w-lg gap-6">
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
                <SectionHeading label="Components" headline="Accordion" />
                <div className="max-w-lg">
                    <Accordion
                        type="single"
                        value={accordionValue}
                        onValueChange={setAccordionValue}
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Section One</AccordionTrigger>
                            <AccordionContent>
                                Content for section one. This demonstrates the
                                accordion component with motion animation.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Section Two</AccordionTrigger>
                            <AccordionContent>
                                Content for section two with different text.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Section>

            <Section>
                <SectionHeading label="Components" headline="Dialog" />
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogTrigger>
                        <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Dialog Title</DialogTitle>
                        </DialogHeader>
                        <p className="text-muted mt-3 text-sm">
                            This is a dialog content area. Press Escape or click
                            outside to close.
                        </p>
                    </DialogContent>
                </Dialog>
            </Section>

            <Section>
                <SectionHeading label="Components" headline="Toast" />
                <div className="flex flex-wrap gap-4">
                    <Button
                        variant="secondary"
                        onClick={() => toast("Info notification", "info")}
                    >
                        Info Toast
                    </Button>
                    <Button
                        onClick={() => toast("Success notification", "success")}
                    >
                        Success Toast
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => toast("Error notification", "error")}
                    >
                        Error Toast
                    </Button>
                </div>
            </Section>

            <Section>
                <SectionHeading label="Components" headline="Link Button" />
                <LinkButton href="/">Read More Link</LinkButton>
            </Section>

            <Section>
                <SectionHeading label="Components" headline="Micro Label" />
                <MicroLabel>Section Label</MicroLabel>
            </Section>

            <Section variant="bordeaux">
                <SectionHeading label="Section" headline="Bordeaux Variant" />
                <p className="text-muted">
                    This section uses the bordeaux secondary variant background.
                </p>
            </Section>

            <Section variant="light">
                <SectionHeading
                    label="Section"
                    headline="Light Variant"
                    className="text-background"
                />
                <p className="text-background">
                    This section uses the light surface variant.
                </p>
            </Section>

            <Section>
                <SectionHeading label="Motion" headline="Reveal Animation" />
                <div className="space-y-24">
                    <Reveal>
                        <div className="border-border text-muted rounded-sm border p-12 text-center">
                            This element fades and slides up on scroll
                        </div>
                    </Reveal>
                    <StaggerGroup staggerDelay={0.15}>
                        <FadeIn>
                            <div className="border-border text-accent rounded-sm border p-8 text-center">
                                Item 1
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="border-border text-accent rounded-sm border p-8 text-center">
                                Item 2
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="border-border text-accent rounded-sm border p-8 text-center">
                                Item 3
                            </div>
                        </FadeIn>
                    </StaggerGroup>
                </div>
            </Section>
        </div>
    )
}
