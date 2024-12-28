const imageSizes = [300, 600, 900, 1200];
const quality = 80;

const imageSizesString = `
(min-width: 1536px) 25vw,
(min-width: 1024px) 33vw,
(min-width: 640px) 50vw,
100vw
`;

export const optimizedImageProps = {
    widths: imageSizes,
    sizes: imageSizesString,
    quality: quality,
};
