/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ohobytdwwuvcrddcdboj.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    domains: ['ohobytdwwuvcrddcdboj.supabase.co'],
  },
}

module.exports = nextConfig
