import type { CareerVacancy } from "@/types/content"

const mockVacancies: CareerVacancy[] = [
    {
        id: "dev-fullstack",
        title: {
            fr: "Développeur Full-Stack Senior",
            en: "Senior Full-Stack Developer",
        },
        department: { fr: "IT & Software", en: "IT & Software" },
        location: "Douala, Cameroun",
        type: { fr: "CDI", en: "Permanent" },
        requirements: {
            fr: "5+ ans d'expérience en Symfony, Nuxt.js, ou FastAPI. Maîtrise des méthodologies agiles et de GitHub Flow.",
            en: "5+ years experience in Symfony, Nuxt.js, or FastAPI. Proficiency in agile methodologies and GitHub Flow.",
        },
        description: {
            fr: "Rejoignez notre équipe technique pour concevoir et développer des solutions logicielles sur mesure pour nos clients en Afrique et en Europe.",
            en: "Join our technical team to design and develop custom software solutions for our clients in Africa and Europe.",
        },
    },
    {
        id: "odoo-consultant",
        title: { fr: "Consultant ERP Odoo", en: "Odoo ERP Consultant" },
        department: { fr: "IT & Software", en: "IT & Software" },
        location: "Douala, Cameroun",
        type: { fr: "CDI", en: "Permanent" },
        requirements: {
            fr: "3+ ans d'expérience Odoo, modules CRM, Ventes, Comptabilité. Certification Odoo souhaitée.",
            en: "3+ years Odoo experience, CRM, Sales, Accounting modules. Odoo certification preferred.",
        },
        description: {
            fr: "Accompagnez nos clients dans leur transformation digitale en déployant et personnalisant Odoo ERP.",
            en: "Support our clients in their digital transformation by deploying and customizing Odoo ERP.",
        },
    },
    {
        id: "commercial-cosmetics",
        title: {
            fr: "Commercial Distribution Cosmétiques",
            en: "Cosmetics Distribution Sales Rep",
        },
        department: {
            fr: "Distribution Cosmétiques",
            en: "Cosmetics Distribution",
        },
        location: "Douala, Cameroun",
        type: { fr: "CDI", en: "Permanent" },
        requirements: {
            fr: "Expérience en distribution B2B, connaissance du marché cosmétique africain. Allemand ou anglais professionnel un plus.",
            en: "B2B distribution experience, knowledge of African cosmetics market. Professional German or English a plus.",
        },
        description: {
            fr: "Développez le réseau de distribution des produits cosmétiques de nos partenaires allemands au Cameroun et en Afrique centrale.",
            en: "Develop the distribution network for our German partners' cosmetic products in Cameroon and Central Africa.",
        },
    },
]

export function getVacancies(): CareerVacancy[] {
    return mockVacancies
}
