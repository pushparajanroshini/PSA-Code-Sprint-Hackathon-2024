/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/admin-one-react-tailwind",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/admin-one-react-tailwind',
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