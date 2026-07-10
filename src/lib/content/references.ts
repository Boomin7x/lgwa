import type { ProjectReference } from "@/types/content"
import { cloudinaryImages } from "@/config/images"

const mockReferences: ProjectReference[] = [
    {
        id: "paligo",
        client: "PALIGO",
        sector: {
            fr: "E-commerce B2B/B2C",
            en: "B2B/B2C E-commerce",
            de: "B2B/B2C-E-Commerce",
        },
        description: {
            fr: "Développement d'une plateforme B2B/B2C complète pour la gestion des commandes, des stocks et des livraisons.",
            en: "Development of a complete B2B/B2C platform for order management, inventory, and deliveries.",
            de: "Entwicklung einer vollständigen B2B/B2C-Plattform für Bestell-, Lager- und Lieferverwaltung.",
        },
        outcome: {
            fr: "+40% d'efficacité opérationnelle, 15 000 commandes traitées par mois.",
            en: "+40% operational efficiency, 15,000 orders processed per month.",
            de: "+40 % operative Effizienz, 15.000 bearbeitete Bestellungen pro Monat.",
        },
        image: cloudinaryImages.ecommercePlatform,
        imageAlt: {
            fr: "Paiement d'une commande en ligne sur un ordinateur portable",
            en: "Online order checkout on a laptop",
            de: "Online-Bestellabschluss auf einem Laptop",
        },
        logo: "/brand/paligo.svg",
        tags: ["e-commerce", "b2b", "full-stack"],
        location: "Allemagne",
    },
    {
        id: "douala-port",
        client: "Port Autonome de Douala",
        sector: {
            fr: "Logistique & Transport",
            en: "Logistics & Transport",
            de: "Logistik & Transport",
        },
        description: {
            fr: "Digitalisation des processus portuaires avec un système de suivi en temps réel des conteneurs.",
            en: "Digitalization of port processes with real-time container tracking system.",
            de: "Digitalisierung der Hafenprozesse mit einem System zur Containerverfolgung in Echtzeit.",
        },
        outcome: {
            fr: "Réduction de 60% des délais de traitement, économie de 200M FCFA/an.",
            en: "60% reduction in processing times, savings of 200M FCFA/year.",
            de: "60 % kürzere Bearbeitungszeiten, Einsparungen von 200 Mio. FCFA pro Jahr.",
        },
        image: cloudinaryImages.cargoShip,
        imageAlt: {
            fr: "Navire porte-conteneurs à quai",
            en: "Container ship docked at the port",
            de: "Containerschiff am Hafenkai",
        },
        logo: "/brand/pad.svg",
        tags: ["logistics", "digitalization"],
        location: "Cameroun",
    },
    {
        id: "microfinance-cm",
        client: "MicroFinance SA",
        sector: {
            fr: "Finance & Banque",
            en: "Finance & Banking",
            de: "Finanzen & Bankwesen",
        },
        description: {
            fr: "Conception et déploiement d'un ERP Odoo sur mesure pour la gestion des microcrédits et de la comptabilité.",
            en: "Design and deployment of a custom Odoo ERP for microcredit and accounting management.",
            de: "Konzeption und Einführung eines maßgeschneiderten Odoo-ERP für Mikrokredit- und Buchhaltungsverwaltung.",
        },
        outcome: {
            fr: "Gestion de 50 000+ clients, conformité COBAC atteinte en 3 mois.",
            en: "Management of 50,000+ clients, COBAC compliance achieved in 3 months.",
            de: "Verwaltung von über 50.000 Kunden, COBAC-Konformität in 3 Monaten erreicht.",
        },
        image: cloudinaryImages.financeDesk,
        imageAlt: {
            fr: "Documents financiers et calculatrice sur un bureau",
            en: "Financial documents and calculator on a desk",
            de: "Finanzunterlagen und Taschenrechner auf einem Schreibtisch",
        },
        logo: "/brand/mf.svg",
        tags: ["odoo", "erp", "finance"],
        location: "Cameroun",
    },
    {
        id: "health-cm",
        client: "Hôpital Central de Yaoundé",
        sector: { fr: "Santé", en: "Healthcare", de: "Gesundheitswesen" },
        description: {
            fr: "Mise en place d'un système de gestion des patients et des dossiers médicaux électroniques.",
            en: "Implementation of a patient management and electronic medical records system.",
            de: "Einführung eines Systems für Patientenverwaltung und elektronische Patientenakten.",
        },
        outcome: {
            fr: "30% de réduction du temps d'attente, 100 000 dossiers numérisés.",
            en: "30% reduction in waiting times, 100,000 digitized records.",
            de: "30 % kürzere Wartezeiten, 100.000 digitalisierte Akten.",
        },
        image: cloudinaryImages.healthcareTech,
        imageAlt: {
            fr: "Professionnelle de santé utilisant un ordinateur",
            en: "Healthcare professional using a computer",
            de: "Medizinische Fachkraft an einem Computer",
        },
        logo: "/brand/hcy.svg",
        tags: ["healthcare", "digitalization"],
        location: "Cameroun",
    },
    {
        id: "telecom-ci",
        client: "AfriTel Côte d'Ivoire",
        sector: {
            fr: "Télécommunications",
            en: "Telecommunications",
            de: "Telekommunikation",
        },
        description: {
            fr: "Développement d'une plateforme DevOps avec CI/CD pour les services de téléphonie mobile.",
            en: "Development of a DevOps platform with CI/CD for mobile telephony services.",
            de: "Entwicklung einer DevOps-Plattform mit CI/CD für Mobilfunkdienste.",
        },
        outcome: {
            fr: "Déploiements 3x plus rapides, 99.9% de disponibilité.",
            en: "3x faster deployments, 99.9% uptime.",
            de: "3x schnellere Deployments, 99,9 % Verfügbarkeit.",
        },
        image: cloudinaryImages.satelliteEarth,
        imageAlt: {
            fr: "Visualisation d'un réseau mondial de télécommunications",
            en: "Global telecommunications network visualization",
            de: "Visualisierung eines weltweiten Telekommunikationsnetzes",
        },
        logo: "/brand/afritel.svg",
        tags: ["devops", "telecom", "ci-cd"],
        location: "Côte d'Ivoire",
    },
    {
        id: "edu-sn",
        client: "EduTech Sénégal",
        sector: {
            fr: "Éducation & EdTech",
            en: "Education & EdTech",
            de: "Bildung & EdTech",
        },
        description: {
            fr: "Création d'une plateforme e-learning avec IA pour la personnalisation des parcours pédagogiques.",
            en: "Creation of an AI-powered e-learning platform for personalized learning paths.",
            de: "Aufbau einer KI-gestützten E-Learning-Plattform für personalisierte Lernpfade.",
        },
        outcome: {
            fr: "20 000 apprenants actifs, taux de complétion des cours à 85%.",
            en: "20,000 active learners, 85% course completion rate.",
            de: "20.000 aktive Lernende, 85 % Kursabschlussquote.",
        },
        image: cloudinaryImages.universityCampus,
        imageAlt: {
            fr: "Étudiants apprenant sur des ordinateurs portables en classe",
            en: "Students learning on laptops in a classroom",
            de: "Studierende lernen im Klassenraum an Laptops",
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
