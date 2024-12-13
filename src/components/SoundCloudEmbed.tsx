import React from 'react';
import type { FC } from 'react';
import SoundCloudEmbed from 'react-player/soundcloud';

type SoundCloudProps = {
    url: string;
} & Record<string, unknown>;

const SoundCloud: FC<SoundCloudProps> = ({ url, ...rest }) => <SoundCloudEmbed url={url} {...rest} height="8rem" />;

export default SoundCloud;
