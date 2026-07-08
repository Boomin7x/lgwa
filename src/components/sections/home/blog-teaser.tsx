import { useTranslations, useLocale } from "next-intl"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { LinkButton } from "@/components/layout/link-button"
import { PostCard } from "@/components/sections/blog/post-card"
import { getPosts } from "@/lib/content/blog-mock"

export function HomeBlogTeaser() {
    const t = useTranslations("home.blog")
    const locale = useLocale() as "fr" | "en"
    const posts = getPosts().slice(0, 3)

    return (
        <Section>
            <SectionHeading headline={t("title")} />
            <div className="grid gap-10 md:grid-cols-3">
                {posts.map((post, i) => (
                    <Reveal key={post.slug} delay={i * 0.08}>
                        <PostCard post={post} locale={locale} />
                    </Reveal>
                ))}
            </div>
            <div className="mt-12">
                <LinkButton href="/blog">{t("cta")}</LinkButton>
            </div>
        </Section>
    )
}
