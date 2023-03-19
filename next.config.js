/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  // Utilisez l'URL de votre projet GitHub Pages ici
  basePath: '/{gaming}',
  assetPrefix: '/{gaming}/',
};