/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.iconscout.com',
        port: '',
        pathname: '*',
      }
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
