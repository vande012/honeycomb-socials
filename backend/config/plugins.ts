export default ({ env }) => {
  

  // Try both possible secret key environment variable names
  const secretKey = process.env.AWS_SECRET_ACCESS_KEY || process.env.AWS_ACCESS_SECRET;

  // Check if all required AWS environment variables are set
  const isAWSConfigured = 
    process.env.AWS_ACCESS_KEY_ID && 
    secretKey &&
    process.env.AWS_REGION &&
    process.env.AWS_BUCKET;

  // Default to local provider if AWS is not configured
  if (!isAWSConfigured) {
    console.warn('AWS S3 credentials not found, using local provider instead.');
    return {
      upload: {
        config: {
          provider: 'local',
          providerOptions: {},
        },
      },
      'users-permissions': {
        config: {
          jwtSecret: env('JWT_SECRET'),
        },
      },
    };
  }

  // Use AWS S3 provider when credentials are available
  return {
    upload: {
      config: {
        provider: '@strapi/provider-upload-aws-s3',
        providerOptions: {
          baseUrl: `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          rootPath: '',
          s3Options: {
            credentials: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID,
              secretAccessKey: secretKey,
            },
            region: process.env.AWS_REGION,
            params: {
              ACL: 'public-read',
              signedUrlExpires: 15 * 60,
              Bucket: process.env.AWS_BUCKET,
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    'users-permissions': {
      config: {
        jwtSecret: env('JWT_SECRET'),
      },
    },
  };
};
  