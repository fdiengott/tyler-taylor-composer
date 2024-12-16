#!/usr/bin/env zx
import { $ } from 'zx';

import works from './data/works.js';
import press from './data/press.js';

const content = press;
const dir = 'press';

const convertTitleToFilename = (title) =>
    title
        .trim()
        .replace(/["\.?]/g, '')
        .replace(/\s/g, '-')
        .toLowerCase();

await Promise.all(
    content.map(async (item, idx) => {
        const { content } = item;
        // const title = content.match(/title: (.+)/)[1];
        // const filename = convertTitleToFilename(title);
        const filename = `press-${idx + 1}`;
        await $`echo ${content} > ./src/content/${dir}/${filename}.md`;
    }),
);
