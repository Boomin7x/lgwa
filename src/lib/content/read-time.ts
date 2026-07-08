const WORDS_PER_MINUTE = 200

export function estimateReadTime(html: string): number {
    const text = html.replace(/<[^>]+>/g, " ")
    const words = text.split(/\s+/).filter(Boolean).length
    return Math.max(1, Math.round(words / WORDS_PER_MINUTE))
}
