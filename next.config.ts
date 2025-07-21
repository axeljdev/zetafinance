/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Supprimez "unoptimized: true" ou changez en :
    formats: ["image/webp", "image/avif"],
  },
  webpack: (config: { resolve: { fallback: { fs: boolean } } }) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  async redirects() {
    return [
      {
        source: "/erp",
        destination: "http://zetafinance.fr/erp",
        permanent: true,
      },
      {
        source: "/erp/:path*",
        destination: "http://zetafinance.fr/erp/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
