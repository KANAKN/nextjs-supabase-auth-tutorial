/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ohobytdwwuvcrddcdboj.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

module.exports = nextConfig

/** 元のコード
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['dbtpdgpnuwalspbfbidd.supabase.co'],
  },
}
*/

module.exports = nextConfig
