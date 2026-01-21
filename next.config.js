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
  devIndicators: {
    buildActivity: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    minimumCacheTTL: 0,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'media.graphassets.com' },
      { protocol: 'https', hostname: 'avatars.dicebear.com' },
    ],
  },
  turbopack: {},
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
    // turbo: false,
    optimizeCss: true, // removes render-blocking CSS
    scrollRestoration: true, // to improve navigation performance
    optimizePackageImports: ['react-icons', 'nuka-carousel'], // to reduce bundle size
    // css: {
    //   modules: true,
    // },
    // resourcePriority: {
    //   images: 'high',
    //   scripts: 'low',
    //   stylesheets: 'medium',
    // },
  },
};

module.exports = withBundleAnalyzer(nextConfig);
