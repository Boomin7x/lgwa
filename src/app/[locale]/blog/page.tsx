import { getTranslations } from "next-intl/server"
import { getLocale } from "next-intl/server"
import type { Metadata } from "next"
import { BlogIndexHero } from "@/components/sections/blog/index-hero"
import { PostCard } from "@/components/sections/blog/post-card"
import { NewsletterBlock } from "@/components/sections/blog/newsletter-block"
import { Section } from "@/components/layout/section"
import { getPosts } from "@/lib/content/blog-mock"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("blog.meta")
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function BlogPage() {
    const locale = (await getLocale()) as "fr" | "en"
    const posts = getPosts()

    return (
        <>
            <BlogIndexHero />
            <Section>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <PostCard key={post.slug} post={post} locale={locale} />
                    ))}
                </div>
            </Section>
            <NewsletterBlock />
        </>
    )
}
