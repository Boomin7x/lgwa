import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { BlogIndexHero } from "@/components/sections/blog/index-hero"
import { PostCard } from "@/components/sections/blog/post-card"
import { NewsletterBlock } from "@/components/sections/blog/newsletter-block"
import { Section } from "@/components/layout/section"
import { getPosts } from "@/lib/content/blog-mock"

type PageProps = {
    params: Promise<{ locale: Locale }>
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "blog.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

export default async function BlogPage({ params }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
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
