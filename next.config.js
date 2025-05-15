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

// next.config.js
module.exports = {
  images: {
    domains: ['ohobytdwwuvcrddcdboj.supabase.co'],
  },
}

/** 元のコード
module.exports = nextConfig

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
