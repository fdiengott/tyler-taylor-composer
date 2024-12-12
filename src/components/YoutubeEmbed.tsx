import React from 'react';
import type { FC } from 'react';
import YoutubeEmbed from 'react-player/youtube';

//  INFO: if url is an array of urls, it will load the videos as an untitled playlist
type YoutubeProps = {
    url: string | string[];
} & Record<string, unknown>;

const Youtube: FC<YoutubeProps> = ({ url, ...rest }) => {
    return <YoutubeEmbed url={url} {...rest} />;
};

export default Youtube;
