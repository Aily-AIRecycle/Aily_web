/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: `/member/:path*`,
        destination: `http://ailymit.store/member/:path*`,
      },
    ];
  },
};
