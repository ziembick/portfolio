/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'portfolio-tutorial-2023.vercel.app'], 
  },
}

module.exports = nextConfig
