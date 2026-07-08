import { getTranslations, setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import type { Locale } from "next-intl"
import { BlogIndexHero } from "@/components/sections/blog/index-hero"
import { PostList } from "@/components/sections/blog/post-list"
import { NewsletterBlock } from "@/components/sections/blog/newsletter-block"
import { Section } from "@/components/layout/section"
import { getPosts } from "@/lib/content/blog-mock"

type PageProps = {
    params: Promise<{ locale: Locale }>
    searchParams: Promise<{ category?: string }>
}

export async function generateMetadata({
    params,
}: Pick<PageProps, "params">): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "blog.meta" })
    return {
        title: t("title"),
        description: t("description"),
    }
}

function parseCategory(value?: string): "tech" | "news" | "all" {
    return value === "tech" || value === "news" ? value : "all"
}

export default async function BlogPage({ params, searchParams }: PageProps) {
    const { locale } = await params
    setRequestLocale(locale)
    const { category } = await searchParams
    const activeCategory = parseCategory(category)
    const posts = getPosts()
    const filteredPosts =
        activeCategory === "all"
            ? posts
            : posts.filter((post) => post.categorySlug === activeCategory)

    return (
        <>
            <BlogIndexHero />
            <Section className="pt-16 md:pt-20">
                <PostList
                    posts={filteredPosts}
                    locale={locale}
                    activeCategory={activeCategory}
                />
            </Section>
            <NewsletterBlock />
        </>
    )
}
