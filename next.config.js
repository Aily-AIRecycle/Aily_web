/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["ailymit.store"],
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
