/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
  	images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
}


module.exports = {
  images: {
    domains: ["localhost"],
  },
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

