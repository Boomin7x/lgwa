import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { PostBody } from "@/components/sections/blog/post-body"
import { NewsletterBlock } from "@/components/sections/blog/newsletter-block"
import { getPost, getPosts } from "@/lib/content/blog-mock"

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

    return (
        <>
            <PostBody post={post} locale={locale} />
            <NewsletterBlock />
        </>
    )
}
