const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  ...(isDev && { basePath: '/frontend' }), // Apply basePath only in development
  reactStrictMode: true, // Other configurations go here
};