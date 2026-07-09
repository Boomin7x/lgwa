import type { CareerVacancy } from "@/types/content"

const mockVacancies: CareerVacancy[] = [
    {
        id: "dev-fullstack",
        title: {
            fr: "Développeur Full-Stack Senior",
            en: "Senior Full-Stack Developer",
            de: "Senior Full-Stack-Entwickler",
        },
        department: {
            fr: "IT & Software",
            en: "IT & Software",
            de: "IT & Software",
        },
        location: "Douala, Cameroun",
        type: { fr: "CDI", en: "Permanent", de: "Festanstellung" },
        requirements: {
            fr: "5+ ans d'expérience en Symfony, Nuxt.js, ou FastAPI. Maîtrise des méthodologies agiles et de GitHub Flow.",
            en: "5+ years experience in Symfony, Nuxt.js, or FastAPI. Proficiency in agile methodologies and GitHub Flow.",
            de: "5+ Jahre Erfahrung mit Symfony, Nuxt.js oder FastAPI. Sicherer Umgang mit agilen Methoden und GitHub Flow.",
        },
        description: {
            fr: "Rejoignez notre équipe technique pour concevoir et développer des solutions logicielles sur mesure pour nos clients en Afrique et en Europe.",
            en: "Join our technical team to design and develop custom software solutions for our clients in Africa and Europe.",
            de: "Verstärken Sie unser Technikteam und entwickeln Sie maßgeschneiderte Softwarelösungen für unsere Kunden in Afrika und Europa.",
        },
    },
    {
        id: "odoo-consultant",
        title: {
            fr: "Consultant ERP Odoo",
            en: "Odoo ERP Consultant",
            de: "Odoo-ERP-Berater",
        },
        department: {
            fr: "IT & Software",
            en: "IT & Software",
            de: "IT & Software",
        },
        location: "Douala, Cameroun",
        type: { fr: "CDI", en: "Permanent", de: "Festanstellung" },
        requirements: {
            fr: "3+ ans d'expérience Odoo, modules CRM, Ventes, Comptabilité. Certification Odoo souhaitée.",
            en: "3+ years Odoo experience, CRM, Sales, Accounting modules. Odoo certification preferred.",
            de: "3+ Jahre Odoo-Erfahrung, Module CRM, Vertrieb, Buchhaltung. Odoo-Zertifizierung erwünscht.",
        },
        description: {
            fr: "Accompagnez nos clients dans leur transformation digitale en déployant et personnalisant Odoo ERP.",
            en: "Support our clients in their digital transformation by deploying and customizing Odoo ERP.",
            de: "Begleiten Sie unsere Kunden bei ihrer digitalen Transformation, indem Sie Odoo ERP einführen und anpassen.",
        },
    },
    {
        id: "commercial-cosmetics",
        title: {
            fr: "Commercial Distribution Cosmétiques",
            en: "Cosmetics Distribution Sales Rep",
            de: "Vertriebsmitarbeiter Kosmetikvertrieb",
        },
        department: {
            fr: "Distribution Cosmétiques",
            en: "Cosmetics Distribution",
            de: "Kosmetikvertrieb",
        },
        location: "Douala, Cameroun",
        type: { fr: "CDI", en: "Permanent", de: "Festanstellung" },
        requirements: {
            fr: "Expérience en distribution B2B, connaissance du marché cosmétique africain. Allemand ou anglais professionnel un plus.",
            en: "B2B distribution experience, knowledge of African cosmetics market. Professional German or English a plus.",
            de: "Erfahrung im B2B-Vertrieb, Kenntnis des afrikanischen Kosmetikmarktes. Verhandlungssicheres Deutsch oder Englisch von Vorteil.",
        },
        description: {
            fr: "Développez le réseau de distribution des produits cosmétiques de nos partenaires allemands au Cameroun et en Afrique centrale.",
            en: "Develop the distribution network for our German partners' cosmetic products in Cameroon and Central Africa.",
            de: "Bauen Sie das Vertriebsnetz für die Kosmetikprodukte unserer deutschen Partner in Kamerun und Zentralafrika aus.",
        },
    },
]

export function getVacancies(): CareerVacancy[] {
    return mockVacancies
}
