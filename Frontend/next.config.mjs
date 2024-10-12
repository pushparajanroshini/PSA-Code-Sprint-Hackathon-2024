/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/learner-buddies",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/learner-buddies',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static',
      },
    ],
  },
}

export default nextConfig