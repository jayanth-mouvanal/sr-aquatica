import { Config } from '../types/config';

export const config: Config = {
    brand: {
        name: "S R AQUATICA",
        tagline: "Exquisite Designs for Living Water Bodies",
        logoText: "SR AQUATICA",
        establishmentYear: "2010",
        location: "Bengaluru, India",
    },
    contact: {
        phone: "+91 97311 19281",
        email: "info@sraquatica.com",
        address: "No 06, Ground Floor, 13th Cross, Dasarahalli Main Rd, behind Canara Bank, Pampa Extension, Hebbal Kempapura, Bengaluru, Karnataka 560024",
        whatsapp: "919731119281",
        socials: {
            instagram: "sraquatica_official",
            facebook: "sraquatica.india",
            twitter: "sraquatica",
        },
    },
    theme: {
        primaryColor: "#0d9488", // Teal 600
        secondaryColor: "#0f766e", // Teal 700
        accentColor: "#f59e0b", // Amber 500
    },
    hero: {
        title: "Artistry in",
        subtitle: "Water",
        description: "From biological swimming pools to intricate nano ponds, we engineer living water systems that breathe life into your architectural vision.",
        image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=2000",
        ctaPrimary: "Consult an Expert",
        ctaSecondary: "View Portfolios",
    },
    stats: [
        { label: 'Completed Projects', value: '250', suffix: '+', color: 'text-teal-600' },
        { label: 'Years of Experience', value: '14', color: 'text-teal-600' },
        { label: 'Aqua Designs', value: '45', suffix: '+', color: 'text-teal-600' },
        { label: 'Happy Clients', value: '180', suffix: '+', color: 'text-teal-600' },
    ],
    services: [
        {
            title: 'Bio Swimming Pools',
            description: 'Chemical-free aquatic environments using biological filtration systems for a natural swimming experience.',
            icon: 'Waves',
            tag: 'Top Rated'
        },
        {
            title: 'Ponds & Nano Ponds',
            description: 'Custom engineered koi ponds and miniature aquatic ecosystems for luxury homes and corporate spaces.',
            icon: 'Fish',
            tag: 'Specialty'
        },
        {
            title: 'Water Gardens',
            description: 'Lush, thriving aquatic landscapes featuring exotic flora and integrated water features.',
            icon: 'Leaf',
        },
        {
            title: 'Aqua Designs',
            description: 'Bespoke architectural water concepts tailored to complement modern engineering and landscape aesthetics.',
            icon: 'Layout',
        },
        {
            title: 'Custom Fountains',
            description: 'Dynamic water features and sculptural fountains that create a sense of movement and tranquility.',
            icon: 'Droplets',
        },
        {
            title: 'Exotic Aquariums',
            description: 'High-end custom aquarium installations for high-visibility commercial and residential interiors.',
            icon: 'GlassWater',
        },
    ],
    process: {
        title: "Crafting Your",
        subtitle: "Ecosystem",
        description: "Our meticulous approach ensures every drop is perfectly engineered and every stone is intentionally placed.",
        steps: [
            {
                number: '01',
                title: 'Design Consultation',
                description: 'We analyze your space to harmonize your vision with technical aqua engineering requirements.',
                icon: 'PencilLine'
            },
            {
                number: '02',
                title: 'Technical Schematics',
                description: 'Detailed biological filtration and hydraulic planning to ensure ecosystem longevity.',
                icon: 'Microscope'
            },
            {
                number: '03',
                title: 'Precision Build',
                description: 'Master-level construction utilizing premium waterproof materials and bio-components.',
                icon: 'Hammer'
            },
            {
                number: '04',
                title: 'Living Activation',
                description: 'System commissioning and biological cycling to ensure a healthy, self-sustaining water body.',
                icon: 'Sparkles'
            }
        ],
    },
    featuredProject: {
        title: "The Zen",
        subtitle: "Sanctuary",
        description: "A private 2,000 sq.ft. bio-pool integrated with a waterfall koi pond and a tiered water garden in North Bengaluru.",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200",
        details: [
            { label: 'Project Type', value: 'Bio-Pool & Pond' },
            { label: 'Filtration', value: 'Phyto-System' },
            { label: 'Location', value: 'Bangalore Golf Club' },
            { label: 'Execution', value: '16 Weeks' }
        ],
    },
    testimonials: [
        {
            name: "Dr. Anirudh Rao",
            role: "Estate Owner",
            content: "S R Aquatica transformed our courtyard into a living oasis. Their biological filtration system is a work of art—the water is crystal clear without a single chemical.",
            image: "https://i.pravatar.cc/150?u=ani",
            project: "Zen Sanctuary"
        },
        {
            name: "Meera Krishnan",
            role: "Architectural Lead",
            content: "Integrating water features into modern homes can be tricky. S R Aquatica's engineering expertise made the process seamless for our latest luxury project.",
            image: "https://i.pravatar.cc/150?u=meera",
            project: "Urban Cascade"
        },
        {
            name: "Vikram Malhotra",
            role: "Facility Manager",
            content: "We've had several aquarium services, but S R Aquatica's attention to biological balance is unparalleled. Our fish have never looked better.",
            image: "https://i.pravatar.cc/150?u=vikram",
            project: "Corporate Aqua Wall"
        }
    ],
};
