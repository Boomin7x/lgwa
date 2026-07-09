import type { ProjectReference } from "@/types/content"

const mockReferences: ProjectReference[] = [
    {
        id: "paligo",
        client: "PALIGO",
        sector: { fr: "E-commerce B2B/B2C", en: "B2B/B2C E-commerce" },
        description: {
            fr: "Développement d'une plateforme B2B/B2C complète pour la gestion des commandes, des stocks et des livraisons.",
            en: "Development of a complete B2B/B2C platform for order management, inventory, and deliveries.",
        },
        outcome: {
            fr: "+40% d'efficacité opérationnelle, 15 000 commandes traitées par mois.",
            en: "+40% operational efficiency, 15,000 orders processed per month.",
        },
        image: "/images/photo-1563013544-824ae1b704d3.avif",
        imageAlt: {
            fr: "Paiement d'une commande en ligne sur un ordinateur portable",
            en: "Online order checkout on a laptop",
        },
        logo: "/brand/paligo.svg",
        tags: ["e-commerce", "b2b", "full-stack"],
        location: "Allemagne",
    },
    {
        id: "douala-port",
        client: "Port Autonome de Douala",
        sector: { fr: "Logistique & Transport", en: "Logistics & Transport" },
        description: {
            fr: "Digitalisation des processus portuaires avec un système de suivi en temps réel des conteneurs.",
            en: "Digitalization of port processes with real-time container tracking system.",
        },
        outcome: {
            fr: "Réduction de 60% des délais de traitement, économie de 200M FCFA/an.",
            en: "60% reduction in processing times, savings of 200M FCFA/year.",
        },
        image: "/images/photo-1578575437130-527eed3abbec.avif",
        imageAlt: {
            fr: "Navire porte-conteneurs à quai",
            en: "Container ship docked at the port",
        },
        logo: "/brand/pad.svg",
        tags: ["logistics", "digitalization"],
        location: "Cameroun",
    },
    {
        id: "microfinance-cm",
        client: "MicroFinance SA",
        sector: { fr: "Finance & Banque", en: "Finance & Banking" },
        description: {
            fr: "Conception et déploiement d'un ERP Odoo sur mesure pour la gestion des microcrédits et de la comptabilité.",
            en: "Design and deployment of a custom Odoo ERP for microcredit and accounting management.",
        },
        outcome: {
            fr: "Gestion de 50 000+ clients, conformité COBAC atteinte en 3 mois.",
            en: "Management of 50,000+ clients, COBAC compliance achieved in 3 months.",
        },
        image: "/images/photo-1554224155-6726b3ff858f.avif",
        imageAlt: {
            fr: "Documents financiers et calculatrice sur un bureau",
            en: "Financial documents and calculator on a desk",
        },
        logo: "/brand/mf.svg",
        tags: ["odoo", "erp", "finance"],
        location: "Cameroun",
    },
    {
        id: "health-cm",
        client: "Hôpital Central de Yaoundé",
        sector: { fr: "Santé", en: "Healthcare" },
        description: {
            fr: "Mise en place d'un système de gestion des patients et des dossiers médicaux électroniques.",
            en: "Implementation of a patient management and electronic medical records system.",
        },
        outcome: {
            fr: "30% de réduction du temps d'attente, 100 000 dossiers numérisés.",
            en: "30% reduction in waiting times, 100,000 digitized records.",
        },
        image: "/images/photo-1576091160399-112ba8d25d1d.avif",
        imageAlt: {
            fr: "Professionnelle de santé utilisant un ordinateur",
            en: "Healthcare professional using a computer",
        },
        logo: "/brand/hcy.svg",
        tags: ["healthcare", "digitalization"],
        location: "Cameroun",
    },
    {
        id: "telecom-ci",
        client: "AfriTel Côte d'Ivoire",
        sector: { fr: "Télécommunications", en: "Telecommunications" },
        description: {
            fr: "Développement d'une plateforme DevOps avec CI/CD pour les services de téléphonie mobile.",
            en: "Development of a DevOps platform with CI/CD for mobile telephony services.",
        },
        outcome: {
            fr: "Déploiements 3x plus rapides, 99.9% de disponibilité.",
            en: "3x faster deployments, 99.9% uptime.",
        },
        image: "/images/photo-1451187580459-43490279c0fa.avif",
        imageAlt: {
            fr: "Visualisation d'un réseau mondial de télécommunications",
            en: "Global telecommunications network visualization",
        },
        logo: "/brand/afritel.svg",
        tags: ["devops", "telecom", "ci-cd"],
        location: "Côte d'Ivoire",
    },
    {
        id: "edu-sn",
        client: "EduTech Sénégal",
        sector: { fr: "Éducation & EdTech", en: "Education & EdTech" },
        description: {
            fr: "Création d'une plateforme e-learning avec IA pour la personnalisation des parcours pédagogiques.",
            en: "Creation of an AI-powered e-learning platform for personalized learning paths.",
        },
        outcome: {
            fr: "20 000 apprenants actifs, taux de complétion des cours à 85%.",
            en: "20,000 active learners, 85% course completion rate.",
        },
        image: "/images/photo-1523240795612-9a054b0db644.avif",
        imageAlt: {
            fr: "Étudiants apprenant sur des ordinateurs portables en classe",
            en: "Students learning on laptops in a classroom",
        },
        logo: "/brand/edutech.svg",
        tags: ["ai", "education", "platform"],
        location: "Sénégal",
    },
]

export function getReferences(): ProjectReference[] {
    return mockReferences
}

export function getReferenceById(id: string): ProjectReference | undefined {
    return mockReferences.find((ref) => ref.id === id)
}
