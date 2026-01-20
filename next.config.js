/** @type {import('next').NextConfig} */
const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  // productionBrowserSourceMaps: true,
  productionBrowserSourceMaps: false, // Disable for prod perf
  compress: true, // to enable gzip in Next.js
  // swcMinify: true,
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
      // moment: false,
      moment: 'dayjs', // Smaller than moment
      '@components': path.resolve(__dirname, 'src/components'), // to prevent large imports
    };
    return config;
  },
  experimental: {
    scrollRestoration: true, // to improve navigation performance
    optimizeCss: true, // removes render-blocking CSS
    optimizePackageImports: ['react-icons', 'nuka-carousel'], // to reduce bundle size
  },
};

module.exports = withBundleAnalyzer(nextConfig);
