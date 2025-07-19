/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'vercel.app'],
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  // Ensure static assets are served correctly
  async headers() {
    return [
      {
        source: '/asset/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig 