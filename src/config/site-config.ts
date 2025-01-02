export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
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
    newsPerPage?: number;
    pressPerPage?: number;
    worksPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Tyler Taylor',
    subtitle: 'Composer, performer',
    description: 'Tyler Taylor, composer',
    image: {
        src: '../assets/hero.jpg',
        //  TODO:
        alt: '',
    },
    headerNavLinks: [
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
    footerNavLinks: [],
    newsPerPage: 8,
    pressPerPage: 8,
    worksPerPage: 8,
};

export default siteConfig;
