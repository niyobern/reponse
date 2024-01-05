/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.iconscout.com',
        port: '',
        pathname: '*',
      },
      {
        protocol: 'https',
        hostname: 'reponse_backend-1-r0934826.deta.app',
        port: '',
        pathname: '*',
      }
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
