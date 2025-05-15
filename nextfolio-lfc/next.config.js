const createNextIntlPlugin = require('next-intl/plugin');

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  transpilePackages: ['three'],
};

const withNextIntl = createNextIntlPlugin({
  defaultLocale: 'en',
  locales: ['en', 'es'],
  path: './messages',
});

module.exports = withNextIntl(nextConfig);
