"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import type { Locale } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Input } from "@/components/ui/input"
import { PostCard } from "./post-card"
import type { BlogPost } from "@/types/content"

type CategoryKey = "all" | "tech" | "news"

const categoryLinks: Array<{ key: CategoryKey; href: string }> = [
    { key: "all", href: "/blog" },
    { key: "tech", href: "/blog?category=tech" },
    { key: "news", href: "/blog?category=news" },
]

type PostListProps = {
    posts: BlogPost[]
    locale: Locale
    activeCategory: CategoryKey
}

export function PostList({ posts, locale, activeCategory }: PostListProps) {
    const t = useTranslations("blog")
    const [query, setQuery] = useState("")

    const normalizedQuery = query.trim().toLowerCase()
    const visiblePosts = normalizedQuery
        ? posts.filter((post) =>
              `${post.title[locale]} ${post.excerpt[locale]}`
                  .toLowerCase()
                  .includes(normalizedQuery)
          )
        : posts

    return (
        <div>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
                <nav
                    aria-label={t("filter.all")}
                    className="flex flex-wrap gap-2"
                >
                    {categoryLinks.map(({ key, href }) => (
                        <Link
                            key={key}
                            href={href}
                            aria-current={
                                activeCategory === key ? "page" : undefined
                            }
                            className={`border px-4 py-2 font-mono text-[11px] tracking-widest uppercase transition-colors ${
                                activeCategory === key
                                    ? "border-accent bg-accent text-background"
                                    : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
                            }`}
                        >
                            {t(`filter.${key}`)}
                        </Link>
                    ))}
                </nav>
                <Input
                    type="search"
                    aria-label={t("search.placeholder")}
                    placeholder={t("search.placeholder")}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="max-w-xs"
                />
            </div>
            {visiblePosts.length === 0 ? (
                <p className="text-body text-muted">{t("search.noResults")}</p>
            ) : (
                <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                    {visiblePosts.map((post) => (
                        <PostCard key={post.slug} post={post} locale={locale} />
                    ))}
                </div>
            )}
        </div>
    )
}
