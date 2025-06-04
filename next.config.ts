import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,

  images: {
    domains: ['localhost', 'nextjs-dashboard-theta-eosin-63.vercel.app'],
  },

  experimental: {
    ppr: !isProd ? false : false, // active only in dev
  },

  env: {
    CUSTOM_API_URL: isProd
      ? 'https://nextjs-dashboard-theta-eosin-63.vercel.app/'
      : 'http://localhost:3000',
  },
}

export default nextConfig
