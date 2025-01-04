import { type CollectionEntry } from 'astro:content';
import { slugify } from './common-utils';

export function sortItemsByDateDesc(itemA: CollectionEntry<'blog' | 'projects'>, itemB: CollectionEntry<'blog' | 'projects'>) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}

export function getAllTags(posts: CollectionEntry<'blog'>[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                slug: slugify(tag),
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.slug).indexOf(obj.slug) === pos;
        });
}

export function getPostsByTag(posts: CollectionEntry<'blog'>[], tagSlug: string) {
    const filteredPosts: CollectionEntry<'blog'>[] = posts.filter((post) => (post.data.tags || []).map((tag) => slugify(tag)).includes(tagSlug));
    return filteredPosts;
}

export const removeTemplates = <T extends { id: string }>(collection: T[]): T[] => {
    return collection.filter((item) => !item.id.startsWith('-'));
};

export const sortWorksByDate = (workA: CollectionEntry<'works'>, workB: CollectionEntry<'works'>) => {
    const {
        data: { premiere: premiereA, date: dateA, year: yearA },
    } = workA;
    const {
        data: { premiere: premiereB, date: dateB, year: yearB },
    } = workB;

    let timeA = premiereA && new Date(premiereA).getTime();
    let timeB = premiereB && new Date(premiereB).getTime();

    if (timeA && timeB) {
        return timeB - timeA;
    }

    timeA = dateA && new Date(dateA).getTime();
    timeB = dateB && new Date(dateB).getTime();

    if (timeA && timeB) {
        return timeB - timeA;
    }

    timeA = yearA && new Date(yearA).getTime();
    timeB = yearB && new Date(yearB).getTime();

    if (timeA && timeB) {
        return timeB - timeA;
    }

    return 0;
};

export const sortByFileName = (a: CollectionEntry<'press'>, b: CollectionEntry<'press'>) => {
    return a.id < b.id ? 1 : -1;
};
