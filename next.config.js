/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  experimental: {
    appDir: true,
    isrMemoryCacheSize: 0,
  },
  images: {
    domains: ['media.graphassets.com', 'portfolio-tutorial-2023.vercel.app'], 
  },
}

module.exports = nextConfig
