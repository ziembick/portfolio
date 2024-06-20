/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'portfolio-tutorial-2023.vercel.app', 'portfolio-eight-psi-44.vercel.app'], 
  },
}

module.exports = nextConfig
