/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
    domains: [
      'res.cloudinary.com',
      'media.graphassets.com',
      'avatars.dicebear.com',
    ],
  },
};

module.exports = nextConfig;
