/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config: { resolve: { fallback: { fs: boolean } } }) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

module.exports = nextConfig;
