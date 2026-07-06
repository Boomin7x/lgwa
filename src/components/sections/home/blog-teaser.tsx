import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { SectionHeading } from "@/components/layout/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { LinkButton } from "@/components/layout/link-button"
import { getPosts } from "@/lib/content/blog-mock"

export function HomeBlogTeaser() {
    const t = useTranslations("home.blog")
    const locale = useLocale() as "fr" | "en"
    const posts = getPosts().slice(0, 3)

    return (
        <Section>
            <SectionHeading label={t("label")} headline={t("title")} />
            <div className="grid gap-6 md:grid-cols-3">
                {posts.map((post) => (
                    <Reveal key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group border-border hover:border-accent/20 block rounded-sm border p-6 transition-colors"
                        >
                            <p className="text-micro text-accent tracking-[0.15em] uppercase">
                                {post.category[locale]}
                            </p>
                            <h3 className="text-foreground group-hover:text-accent mt-2 font-medium transition-colors">
                                {post.title[locale]}
                            </h3>
                            <p className="text-small text-muted mt-2 line-clamp-2">
                                {post.excerpt[locale]}
                            </p>
                            <p className="text-small text-muted mt-3">
                                {post.publishedAt} · {post.readTime}{" "}
                                {t("blog:readTime")}
                            </p>
                        </Link>
                    </Reveal>
                ))}
            </div>
            <div className="mt-8">
                <LinkButton href="/blog">{t("cta")}</LinkButton>
            </div>
        </Section>
    )
}
