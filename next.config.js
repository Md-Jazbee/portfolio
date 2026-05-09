/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wpriverthemes.com",
      },
    ],
    unoptimized: true,
  },
  turbopack: {},
};

module.exports = nextConfig;
