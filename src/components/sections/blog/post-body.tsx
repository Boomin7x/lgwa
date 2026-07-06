import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Section } from "@/components/layout/section"
import { LinkButton } from "@/components/layout/link-button"
import type { BlogPost } from "@/types/content"

type PostBodyProps = {
    post: BlogPost
    locale: "fr" | "en"
}

export function PostBody({ post, locale }: PostBodyProps) {
    const t = useTranslations("blog")

    return (
        <Section className="pt-32">
            <LinkButton href="/blog" variant="ghost" className="mb-8">
                {t("backToBlog")}
            </LinkButton>
            <article>
                <p className="text-micro text-accent tracking-[0.15em] uppercase">
                    {post.category[locale]}
                </p>
                <h1 className="font-display text-display text-foreground mt-4">
                    {post.title[locale]}
                </h1>
                <div className="text-small text-muted mt-6 flex items-center gap-4">
                    <span>
                        {t("by")} {post.author}
                    </span>
                    <span>
                        {t("publishedOn")} {post.publishedAt}
                    </span>
                    <span>
                        {post.readTime} {t("readTime")}
                    </span>
                </div>
                <div
                    className="prose-custom text-body text-muted mt-12 max-w-2xl space-y-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.body[locale] }}
                />
                <div className="mt-8 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag[locale]}
                            className="border-border text-micro text-muted rounded-sm border px-3 py-1"
                        >
                            {tag[locale]}
                        </span>
                    ))}
                </div>
                <div className="border-border mt-8 border-t pt-8">
                    <h3 className="font-display text-h4 text-foreground">
                        {t("share")}
                    </h3>
                    <div className="mt-3 flex gap-4">
                        <Link
                            href={`https://www.linkedin.com/shareArticle?url=https://liongate-sarl.com/blog/${post.slug}`}
                            target="_blank"
                            className="text-small text-muted hover:text-accent transition-colors"
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </article>
        </Section>
    )
}
