import type { BlogPost } from "@/types/content"
import { cloudinaryImages } from "@/config/images"
import { estimateReadTime } from "./read-time"

type MockPost = Omit<BlogPost, "readTime">

const mockPosts: MockPost[] = [
    {
        slug: "paligo-digitalisation-commerce-afrique",
        title: {
            fr: "Comment PALIGO révolutionne le commerce B2B en Afrique centrale",
            en: "How PALIGO Is Revolutionizing B2B Commerce in Central Africa",
            de: "Wie PALIGO den B2B-Handel in Zentralafrika revolutioniert",
        },
        excerpt: {
            fr: "Découvrez comment la plateforme PALIGO, développée par LionGate Sarl, transforme les chaînes d'approvisionnement pour les entreprises africaines grâce à une solution e-commerce B2B/B2C intégrée.",
            en: "Discover how the PALIGO platform, developed by LionGate Sarl, is transforming supply chains for African businesses through an integrated B2B/B2C e-commerce solution.",
            de: "Erfahren Sie, wie die von LionGate Sarl entwickelte PALIGO-Plattform die Lieferketten afrikanischer Unternehmen mit einer integrierten B2B/B2C-E-Commerce-Lösung verändert.",
        },
        body: {
            fr: "<p>Dans un contexte où la digitalisation du commerce en Afrique centrale s'accélère, la plateforme PALIGO se positionne comme un acteur clé de cette transformation. Développée intégralement par les équipes de LionGate Sarl, cette solution répond aux besoins spécifiques des entreprises de la région.</p><p>La plateforme offre une gestion complète des stocks, des commandes et des livraisons, le tout accessible via une interface intuitive en français et en anglais.</p>",
            en: "<p>As digital commerce accelerates in Central Africa, the PALIGO platform positions itself as a key player in this transformation. Developed entirely by LionGate Sarl's teams, this solution meets the specific needs of businesses in the region.</p><p>The platform offers complete management of inventory, orders, and deliveries, all accessible through an intuitive interface in French and English.</p>",
            de: "<p>Während die Digitalisierung des Handels in Zentralafrika Fahrt aufnimmt, positioniert sich die PALIGO-Plattform als Schlüsselakteur dieses Wandels. Die vollständig von den Teams von LionGate Sarl entwickelte Lösung erfüllt die spezifischen Anforderungen der Unternehmen in der Region.</p><p>Die Plattform bietet eine vollständige Verwaltung von Lagerbeständen, Bestellungen und Lieferungen, alles zugänglich über eine intuitive Oberfläche auf Französisch und Englisch.</p>",
        },
        coverImage: cloudinaryImages.ecommerceCheckout,
        coverImageAlt: {
            fr: "Paiement électronique lors d'une transaction e-commerce",
            en: "Electronic payment during an e-commerce transaction",
            de: "Elektronische Zahlung bei einer E-Commerce-Transaktion",
        },
        category: {
            fr: "Tech & Digital",
            en: "Tech & Digital",
            de: "Tech & Digital",
        },
        categorySlug: "tech",
        author: "Équipe LionGate",
        publishedAt: "2026-06-15",
        tags: [
            { fr: "E-commerce", en: "E-commerce", de: "E-Commerce" },
            { fr: "B2B", en: "B2B", de: "B2B" },
            {
                fr: "Transformation digitale",
                en: "Digital Transformation",
                de: "Digitale Transformation",
            },
        ],
    },
    {
        slug: "odoo-erp-avantages-pme-africaines",
        title: {
            fr: "Odoo ERP : 5 avantages clés pour les PME africaines",
            en: "Odoo ERP: 5 Key Benefits for African SMEs",
            de: "Odoo ERP: 5 zentrale Vorteile für afrikanische KMU",
        },
        excerpt: {
            fr: "L'ERP open-source Odoo s'impose comme une solution de choix pour les PME africaines. Découvrez les cinq avantages majeurs qui en font un outil incontournable de la transformation digitale.",
            en: "The open-source Odoo ERP is becoming a go-to solution for African SMEs. Discover the five major benefits that make it an essential digital transformation tool.",
            de: "Das Open-Source-ERP Odoo entwickelt sich zur bevorzugten Lösung für afrikanische KMU. Entdecken Sie die fünf wichtigsten Vorteile, die es zu einem unverzichtbaren Werkzeug der digitalen Transformation machen.",
        },
        body: {
            fr: "<p>Les PME africaines font face à des défis uniques : ressources limitées, besoin d'agilité et accès restreint aux technologies de pointe. Odoo ERP apporte une réponse concrète à ces enjeux.</p><p>Modularité, coût maîtrisé, adaptabilité locale : Odoo coche toutes les cases pour les entreprises en croissance sur le continent.</p>",
            en: "<p>African SMEs face unique challenges: limited resources, need for agility, and restricted access to cutting-edge technologies. Odoo ERP provides a concrete answer to these challenges.</p><p>Modularity, controlled costs, local adaptability: Odoo checks all the boxes for growing businesses on the continent.</p>",
            de: "<p>Afrikanische KMU stehen vor besonderen Herausforderungen: begrenzte Ressourcen, hoher Bedarf an Agilität und eingeschränkter Zugang zu Spitzentechnologien. Odoo ERP liefert darauf eine konkrete Antwort.</p><p>Modularität, kalkulierbare Kosten, lokale Anpassbarkeit: Odoo erfüllt alle Anforderungen wachsender Unternehmen auf dem Kontinent.</p>",
        },
        coverImage: cloudinaryImages.analyticsDashboard,
        coverImageAlt: {
            fr: "Tableau de bord analytique affiché sur un écran",
            en: "Analytics dashboard displayed on a screen",
            de: "Analyse-Dashboard auf einem Bildschirm",
        },
        category: {
            fr: "Tech & Digital",
            en: "Tech & Digital",
            de: "Tech & Digital",
        },
        categorySlug: "tech",
        author: "Jean M., Directeur Technique",
        publishedAt: "2026-05-28",
        tags: [
            { fr: "Odoo", en: "Odoo", de: "Odoo" },
            { fr: "ERP", en: "ERP", de: "ERP" },
            { fr: "PME", en: "SMEs", de: "KMU" },
        ],
    },
    {
        slug: "devops-afrique-bonnes-pratiques",
        title: {
            fr: "DevOps en Afrique : bonnes pratiques et retours d'expérience",
            en: "DevOps in Africa: Best Practices and Case Studies",
            de: "DevOps in Afrika: Best Practices und Erfahrungsberichte",
        },
        excerpt: {
            fr: "Retour sur nos projets DevOps au Cameroun et en Côte d'Ivoire. Infrastructure as Code, CI/CD, monitoring : comment nous aidons nos clients à industrialiser leurs déploiements.",
            en: "A look back at our DevOps projects in Cameroon and Ivory Coast. Infrastructure as Code, CI/CD, monitoring: how we help our clients industrialize their deployments.",
            de: "Ein Rückblick auf unsere DevOps-Projekte in Kamerun und der Elfenbeinküste. Infrastructure as Code, CI/CD, Monitoring: Wie wir unseren Kunden helfen, ihre Deployments zu industrialisieren.",
        },
        body: {
            fr: "<p>Le DevOps n'est pas réservé aux grands groupes technologiques. En Afrique, de plus en plus d'entreprises adoptent ces pratiques pour accélérer leurs cycles de développement et améliorer la fiabilité de leurs services.</p><p>À travers nos missions au Cameroun et en Côte d'Ivoire, nous avons identifié les pratiques qui fonctionnent le mieux dans le contexte africain.</p>",
            en: "<p>DevOps is not reserved for large tech groups. In Africa, more and more companies are adopting these practices to accelerate their development cycles and improve service reliability.</p><p>Through our missions in Cameroon and Ivory Coast, we have identified the practices that work best in the African context.</p>",
            de: "<p>DevOps ist nicht großen Technologiekonzernen vorbehalten. In Afrika übernehmen immer mehr Unternehmen diese Praktiken, um ihre Entwicklungszyklen zu beschleunigen und die Zuverlässigkeit ihrer Dienste zu verbessern.</p><p>Durch unsere Projekte in Kamerun und der Elfenbeinküste haben wir die Praktiken identifiziert, die im afrikanischen Kontext am besten funktionieren.</p>",
        },
        coverImage: cloudinaryImages.serverRacks,
        coverImageAlt: {
            fr: "Rangées de serveurs dans un centre de données",
            en: "Rows of servers in a data center",
            de: "Serverreihen in einem Rechenzentrum",
        },
        category: {
            fr: "Tech & Digital",
            en: "Tech & Digital",
            de: "Tech & Digital",
        },
        categorySlug: "tech",
        author: "Équipe LionGate",
        publishedAt: "2026-05-10",
        tags: [
            { fr: "DevOps", en: "DevOps", de: "DevOps" },
            { fr: "CI/CD", en: "CI/CD", de: "CI/CD" },
        ],
    },
    {
        slug: "liongate-partenariat-allemand-cosmetiques",
        title: {
            fr: "LionGate renforce son partenariat allemand dans la cosmétique",
            en: "LionGate Strengthens Its German Partnership in Cosmetics",
            de: "LionGate stärkt seine deutsche Partnerschaft im Kosmetikbereich",
        },
        excerpt: {
            fr: "Notre pôle Distribution Cosmétiques franchit une nouvelle étape avec l'extension de notre partenariat allemand. De nouvelles gammes de produits arrivent au Cameroun.",
            en: "Our Cosmetics Distribution division reaches a new milestone with the extension of our German partnership. New product lines are arriving in Cameroon.",
            de: "Unser Geschäftsbereich Kosmetikvertrieb erreicht mit dem Ausbau unserer deutschen Partnerschaft einen neuen Meilenstein. Neue Produktlinien kommen nach Kamerun.",
        },
        body: {
            fr: "<p>Depuis sa création, le pôle Distribution Cosmétiques de LionGate Sarl s'appuie sur des partenariats solides avec des fabricants allemands reconnus pour leur qualité et leur innovation.</p><p>Cette nouvelle phase de notre collaboration permet d'élargir la gamme de produits disponibles au Cameroun et en Afrique centrale, avec des marques premium adaptées aux besoins du marché local.</p>",
            en: "<p>Since its creation, LionGate Sarl's Cosmetics Distribution division has relied on strong partnerships with German manufacturers known for their quality and innovation.</p><p>This new phase of our collaboration expands the range of products available in Cameroon and Central Africa, with premium brands adapted to local market needs.</p>",
            de: "<p>Seit seiner Gründung setzt der Geschäftsbereich Kosmetikvertrieb von LionGate Sarl auf starke Partnerschaften mit deutschen Herstellern, die für Qualität und Innovation bekannt sind.</p><p>Diese neue Phase unserer Zusammenarbeit erweitert das in Kamerun und Zentralafrika verfügbare Produktsortiment um Premiummarken, die auf die Bedürfnisse des lokalen Marktes zugeschnitten sind.</p>",
        },
        coverImage: cloudinaryImages.cosmeticsRetail,
        coverImageAlt: {
            fr: "Produits cosmétiques disposés sur un fond clair",
            en: "Cosmetic products arranged on a light background",
            de: "Kosmetikprodukte vor hellem Hintergrund angeordnet",
        },
        category: {
            fr: "Actualités LIONGATE",
            en: "LIONGATE News",
            de: "LIONGATE News",
        },
        categorySlug: "news",
        author: "Équipe LionGate",
        publishedAt: "2026-04-22",
        tags: [
            { fr: "Cosmétiques", en: "Cosmetics", de: "Kosmetik" },
            { fr: "Partenariat", en: "Partnership", de: "Partnerschaft" },
            { fr: "Allemagne", en: "Germany", de: "Deutschland" },
        ],
    },
    {
        slug: "ia-produits-afrique-opportunites",
        title: {
            fr: "IA et produits numériques : les opportunités pour l'Afrique",
            en: "AI and Digital Products: Opportunities for Africa",
            de: "KI und digitale Produkte: Chancen für Afrika",
        },
        excerpt: {
            fr: "L'intelligence artificielle n'est plus une technologie du futur. Analyse des opportunités concrètes pour les entreprises et institutions africaines.",
            en: "Artificial intelligence is no longer a future technology. Analysis of concrete opportunities for African businesses and institutions.",
            de: "Künstliche Intelligenz ist keine Zukunftstechnologie mehr. Eine Analyse der konkreten Chancen für afrikanische Unternehmen und Institutionen.",
        },
        body: {
            fr: "<p>L'IA transforme tous les secteurs, et l'Afrique ne fait pas exception. Des solutions de santé aux outils agricoles, en passant par la fintech, les applications concrètes se multiplient.</p><p>Chez LionGate, nous développons des produits IA adaptés aux réalités du marché africain : modèles légers, fonctionnement hors-ligne, interfaces multilingues.</p>",
            en: "<p>AI is transforming all sectors, and Africa is no exception. From healthcare solutions to agricultural tools, to fintech, concrete applications are multiplying.</p><p>At LionGate, we develop AI products adapted to African market realities: lightweight models, offline functionality, multilingual interfaces.</p>",
            de: "<p>KI verändert alle Branchen, und Afrika bildet da keine Ausnahme. Von Gesundheitslösungen über landwirtschaftliche Werkzeuge bis hin zu Fintech nehmen die konkreten Anwendungen stetig zu.</p><p>Bei LionGate entwickeln wir KI-Produkte, die auf die Realitäten des afrikanischen Marktes zugeschnitten sind: schlanke Modelle, Offline-Betrieb, mehrsprachige Oberflächen.</p>",
        },
        coverImage: cloudinaryImages.aiTechnology,
        coverImageAlt: {
            fr: "Visualisation abstraite d'une intelligence artificielle",
            en: "Abstract visualization of artificial intelligence",
            de: "Abstrakte Visualisierung künstlicher Intelligenz",
        },
        category: {
            fr: "Tech & Digital",
            en: "Tech & Digital",
            de: "Tech & Digital",
        },
        categorySlug: "tech",
        author: "Équipe LionGate",
        publishedAt: "2026-04-05",
        tags: [
            { fr: "IA", en: "AI", de: "KI" },
            { fr: "Innovation", en: "Innovation", de: "Innovation" },
        ],
    },
]

function withReadTime(post: MockPost): BlogPost {
    return { ...post, readTime: estimateReadTime(post.body.fr) }
}

export function getPosts(): BlogPost[] {
    return mockPosts.map(withReadTime)
}

export function getPost(slug: string): BlogPost | undefined {
    const post = mockPosts.find((entry) => entry.slug === slug)
    return post ? withReadTime(post) : undefined
}
