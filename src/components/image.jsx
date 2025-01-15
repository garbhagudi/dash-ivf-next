import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Image({ src, ...rest }) {
  return <LazyLoadImage src={src} {...rest} loading='lazy' />;
}
