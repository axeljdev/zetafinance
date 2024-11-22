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
  optimizeFonts: true,
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
