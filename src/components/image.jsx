import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

/**
 * @param {boolean} [priority] — When true, skip lazy-load (use for LCP images: logos, hero).
 */
export default function Image({ src, priority, alt, className, width, height, ...rest }) {
  if (priority) {
    return (
      <img
        src={src}
        alt={alt ?? ''}
        width={width}
        height={height}
        className={className}
        loading='eager'
        fetchPriority='high'
        decoding='async'
        {...rest}
      />
    );
  }
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...rest}
      loading='lazy'
    />
  );
}
