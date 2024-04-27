import withPWAInit from '@ducanh2912/next-pwa'

const withPWA = withPWAInit({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: '/~offline',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  experimental: {
    turbo: {
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },
  },
})

export default nextConfig
