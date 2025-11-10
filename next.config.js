/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  compress: true, // to enable gzip in Next.js
  images: {
    dangerouslyAllowSVG: true,
    // unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'media.graphassets.com' },
      { protocol: 'https', hostname: 'avatars.dicebear.com' },
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'components'), // to prevent large imports
    };
    return config;
  },
  experimental: {
    scrollRestoration: true, // to improve navigation performance
    optimizeCss: true, // removes render-blocking CSS
  },
};

module.exports = nextConfig;
