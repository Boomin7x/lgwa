import { notFound } from "next/navigation"
import { getLocale } from "next-intl/server"
import type { Metadata } from "next"
import { PostBody } from "@/components/sections/blog/post-body"
import { NewsletterBlock } from "@/components/sections/blog/newsletter-block"
import { getPost, getPosts } from "@/lib/content/blog-mock"

type Params = {
    locale: string
    slug: string
}

export async function generateStaticParams(): Promise<Params[]> {
    const posts = getPosts()
    return posts.flatMap((post) => [
        { locale: "fr", slug: post.slug },
        { locale: "en", slug: post.slug },
    ])
}

export async function generateMetadata({
    params,
}: {
    params: Promise<Pick<Params, "slug">>
}): Promise<Metadata> {
    const { slug } = await params
    const post = getPost(slug)
    if (!post) return { title: "Not Found" }
    const locale = (await getLocale()) as "fr" | "en"
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
    const { slug } = await params
    const post = getPost(slug)
    const locale = (await getLocale()) as "fr" | "en"

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
