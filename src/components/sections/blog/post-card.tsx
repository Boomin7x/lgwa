import { Link } from "@/i18n/navigation"
import type { BlogPost } from "@/types/content"

type PostCardProps = {
    post: BlogPost
    locale: "fr" | "en"
}

export function PostCard({ post, locale }: PostCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group border-border hover:border-accent/20 block rounded-sm border p-6 transition-colors"
        >
            <p className="text-micro text-accent tracking-[0.15em] uppercase">
                {post.category[locale]}
            </p>
            <h3 className="font-display text-h4 text-foreground group-hover:text-accent mt-2 transition-colors">
                {post.title[locale]}
            </h3>
            <p className="text-small text-muted mt-2 line-clamp-2">
                {post.excerpt[locale]}
            </p>
            <p className="text-small text-muted mt-3">
                {post.publishedAt} · {post.readTime} min
            </p>
        </Link>
    )
}
