/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Matches all paths
      },
    ],
  },
  transpilePackages: ['three'], // This remains unchanged
};

module.exports = nextConfig;
