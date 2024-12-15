export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    newsPerPage?: number;
    worksPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Tyler Taylor',
    subtitle: 'Author, translator, editor, teacher, tutor',
    description: 'Tyler Taylor, composer',
    image: {
        //  TODO:
        src: '/dante-preview.jpg',
        alt: '',
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/',
        },
        {
            text: 'About',
            href: '/about',
        },
        {
            text: 'Works',
            href: '/works',
        },
        {
            text: 'News',
            href: '/news',
        },
        {
            text: 'Gallery',
            href: '/gallery',
        },
        {
            text: 'Press',
            href: '/press',
        },
        {
            text: 'Blog',
            href: '/blog',
        },
        {
            text: 'Contact',
            href: '/contact',
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about',
        },
        {
            text: 'Contact',
            href: '/contact',
        },
        {
            text: 'Terms',
            href: '/terms',
        },
    ],
    socialLinks: [
        {
            text: 'Instagram',
            href: 'https://instagram.com/',
        },
    ],
    hero: {
        title: 'Tyler Taylor',
        text: 'A short phrase maybe?',
        image: {
            src: '/hero.jpeg',
            //  TODO:
            alt: 'Tyler Taylor',
        },
    },
    newsPerPage: 8,
    worksPerPage: 8,
};

export default siteConfig;
