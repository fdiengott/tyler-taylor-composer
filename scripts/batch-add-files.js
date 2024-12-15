#!/usr/bin/env zx
import { $ } from 'zx';

import works from './data/works.js';

const content = works;
const dir = 'works';

const convertTitleToFilename = (title) =>
    title
        .trim()
        .replace(/["\.?]/g, '')
        .replace(/\s/g, '-')
        .toLowerCase();

await Promise.all(
    content.map(async (item) => {
        const { content } = item;
        const title = content.match(/title: (.+)/)[1];
        const filename = convertTitleToFilename(title);
        await $`echo ${content} > ./src/content/${dir}/${filename}.md`;
    }),
);
