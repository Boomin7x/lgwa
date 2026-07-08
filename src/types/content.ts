export interface LocalizedField {
    fr: string
    en: string
}

export interface BlogPost {
    slug: string
    title: LocalizedField
    excerpt: LocalizedField
    body: LocalizedField
    coverImage: string
    coverImageAlt: LocalizedField
    category: LocalizedField
    categorySlug: "tech" | "news"
    author: string
    publishedAt: string
    readTime: number
    tags: LocalizedField[]
}

export interface ProjectReference {
    id: string
    client: string
    sector: LocalizedField
    description: LocalizedField
    outcome: LocalizedField
    image: string
    imageAlt: LocalizedField
    logo: string
    tags: string[]
    location: string
}

export interface CareerVacancy {
    id: string
    title: LocalizedField
    department: LocalizedField
    location: string
    type: LocalizedField
    requirements: LocalizedField
    description: LocalizedField
}
