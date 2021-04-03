module.exports = {
  i18n: {
    locales: ['en', 'el'],
    defaultLocale: 'el',
    localeDetection: false,
  },

  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/foo'
        },
      ]
    }
  },
}
