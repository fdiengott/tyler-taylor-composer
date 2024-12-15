#!/usr/bin/env zx

import works from './data/works.js';

await Promise.all(
    works.map(async (work) => {
        const { filename, content } = work;
        await $`echo "${content}" > ../src/content/works/${filename}.md`;
    }),
);
