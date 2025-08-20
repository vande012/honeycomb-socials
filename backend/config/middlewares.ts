export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`],
          'media-src': ["'self'", 'data:', 'blob:', `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://kerstentalentcapital.com/', 'http://localhost:3000', 'https://perpetual-motivation-production.up.railway.app', 'http://localhost:1337'],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
