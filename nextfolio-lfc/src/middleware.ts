import createMiddleware from 'next-intl/middleware';

// Middleware to handle locale detection and redirection with i18n
export default createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'es'
});

export const config = {
  matcher: ['/', '/(en|es)/:path*']
};
