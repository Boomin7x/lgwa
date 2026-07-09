import Image from "next/image"
import type { Locale } from "next-intl"
import { Link } from "@/i18n/navigation"
import type { BlogPost } from "@/types/content"

type PostCardProps = {
    post: BlogPost
    locale: Locale
}

export function PostCard({ post, locale }: PostCardProps) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col"
        >
            <div className="relative aspect-16/10 overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.coverImageAlt[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="img-warm ease-editorial object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
            </div>
            <p className="text-micro text-accent mt-6 font-mono uppercase">
                {post.category[locale]}
            </p>
            <h3 className="font-heading text-h3 text-foreground group-hover:text-accent mt-3 uppercase transition-colors duration-300">
                {post.title[locale]}
            </h3>
            <p className="text-small text-muted mt-3 line-clamp-2 flex-1">
                {post.excerpt[locale]}
            </p>
            <p className="text-micro text-muted border-border mt-6 border-t pt-4 font-mono uppercase">
                {post.publishedAt} · {post.readTime} min
            </p>
        </Link>
    )
}
