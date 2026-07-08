import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { PostBody } from "@/components/sections/blog/post-body"
import { PostCard } from "@/components/sections/blog/post-card"
import { NewsletterBlock } from "@/components/sections/blog/newsletter-block"
import { Section } from "@/components/layout/section"
import { getPost, getPosts } from "@/lib/content/blog-mock"
import type { BlogPost } from "@/types/content"

function getRelatedPosts(current: BlogPost): BlogPost[] {
    const others = getPosts().filter((post) => post.slug !== current.slug)
    const sameCategory = others.filter(
        (post) => post.categorySlug === current.categorySlug
    )
    const rest = others.filter(
        (post) => post.categorySlug !== current.categorySlug
    )
    return [...sameCategory, ...rest].slice(0, 2)
}

type Params = {
    locale: Locale
    slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
    const posts = getPosts()
    return posts.flatMap((post) => [
        { locale: "fr" as const, slug: post.slug },
        { locale: "en" as const, slug: post.slug },
    ])
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Params>
}): Promise<Metadata> {
    const { locale, slug } = await params
    const post = getPost(slug)
    if (!post) return { title: "Not Found" }
    return {
        title: post.title[locale],
        description: post.excerpt[locale],
    }
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<Params>
}) {
    const { locale, slug } = await params
    setRequestLocale(locale)
    const post = getPost(slug)

    if (!post) {
        notFound()
    }

    const related = getRelatedPosts(post)
    const t = await getTranslations("blog")

    return (
        <>
            <PostBody post={post} locale={locale} />
            {related.length > 0 && (
                <Section className="pt-0 md:pt-0">
                    <h2 className="font-heading text-h2 text-foreground mb-10 uppercase">
                        {t("related")}
                    </h2>
                    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:max-w-4xl">
                        {related.map((entry) => (
                            <PostCard
                                key={entry.slug}
                                post={entry}
                                locale={locale}
                            />
                        ))}
                    </div>
                </Section>
            )}
            <NewsletterBlock />
        </>
    )
}
