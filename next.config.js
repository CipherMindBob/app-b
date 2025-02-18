/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/app-b',
  // Configure asset prefix for production
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://app-b.yourdomain.com' 
    : ''
}

module.exports = nextConfig 