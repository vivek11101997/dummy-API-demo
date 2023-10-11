/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['via.placeholder.com'], // Add any other domains you want to allow for images
  },
};

module.exports = nextConfig;
