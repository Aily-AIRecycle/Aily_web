/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["ailymit.store", "play.google.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: `/member/:path*`,
        destination: `https://ailymit.store/member/:path*`,
      },
      {
        source: `/data/:path*`,
        destination: `https://ailymit.store/data/:path*`,
      },
      {
        source: `/board/:path*`,
        destination: `https://ailymit.store/board/:path*`,
      },
    ];
  },
};
