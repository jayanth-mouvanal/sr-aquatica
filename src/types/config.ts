export interface Config {
    brand: {
        name: string;
        tagline: string;
        logoText: string;
        establishmentYear: string;
        location: string;
    };
    contact: {
        phone: string;
        email: string;
        address: string;
        whatsapp: string;
        socials: {
            instagram: string;
            facebook: string;
            twitter: string;
        };
    };
    theme: {
        primaryColor: string;
        secondaryColor: string;
        accentColor: string;
    };
    hero: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    stats: Array<{
        label: string;
        value: string;
        suffix?: string;
        color: string;
    }>;
    services: Array<{
        title: string;
        description: string;
        icon: string;
        tag?: string;
    }>;
    process: {
        title: string;
        subtitle: string;
        description: string;
        steps: Array<{
            number: string;
            title: string;
            description: string;
            icon: string;
        }>;
    };
    featuredProject: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
        details: Array<{
            label: string;
            value: string;
        }>;
    };
    testimonials: Array<{
        name: string;
        role: string;
        content: string;
        image: string;
        project: string;
    }>;
}
