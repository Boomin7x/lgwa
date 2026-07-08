import Image from "next/image"
import { useTranslations } from "next-intl"
import { Section } from "@/components/layout/section"
import { LinkButton } from "@/components/layout/link-button"
import { ScrollProgress } from "@/components/motion/scroll-progress"
import { siteConfig } from "@/config/site"
import type { BlogPost } from "@/types/content"

type PostBodyProps = {
    post: BlogPost
    locale: "fr" | "en"
}

export function PostBody({ post, locale }: PostBodyProps) {
    const t = useTranslations("blog")
    const postUrl = `${siteConfig.url}/${locale}/blog/${post.slug}`

    return (
        <Section className="pt-36 md:pt-44">
            <ScrollProgress />
            <LinkButton href="/blog" variant="ghost" className="mb-10">
                {t("backToBlog")}
            </LinkButton>
            <article>
                <p className="text-micro text-accent font-mono uppercase">
                    {post.category[locale]}
                </p>
                <h1 className="font-heading text-h1 text-foreground mt-4 max-w-4xl uppercase">
                    {post.title[locale]}
                </h1>
                <div className="text-micro text-muted mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono uppercase">
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
                <div className="relative mt-12 aspect-2/1 max-w-4xl overflow-hidden">
                    <Image
                        src={post.coverImage}
                        alt={post.coverImageAlt[locale]}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="img-warm object-cover"
                    />
                </div>
                <div
                    className="text-body text-body-text mt-12 max-w-2xl space-y-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.body[locale] }}
                />
                <div className="mt-10 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <span
                            key={tag[locale]}
                            className="border-border text-micro text-muted border px-3 py-1 font-mono uppercase"
                        >
                            {tag[locale]}
                        </span>
                    ))}
                </div>
                <div className="border-border mt-10 border-t pt-8">
                    <h2 className="text-micro text-muted font-mono uppercase">
                        {t("share")}
                    </h2>
                    <div className="mt-3 flex gap-5">
                        <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-small text-body-text hover:text-accent transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={`https://x.com/intent/post?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(post.title[locale])}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-small text-body-text hover:text-accent transition-colors"
                        >
                            X
                        </a>
                    </div>
                </div>
            </article>
        </Section>
    )
}
