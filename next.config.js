/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/blog',
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://your-cdn-domain.com/blog' 
    : '/blog',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog-static/_next/:path*',
          destination: '/_next/:path*',
        },
      ],
    }
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@your-shared-components']
  }
}

module.exports = nextConfig 