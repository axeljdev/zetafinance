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
  async redirects() {
    return [
      {
        source: "/erp",
        destination: "http://zetafinance.fr/erp/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
