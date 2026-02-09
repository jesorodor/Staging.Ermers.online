/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  transpilePackages: ['three'],
  images: {
    unoptimized: true,
  },
  // Configured for repository: Staging.Ermers.online
  basePath: '/Staging.Ermers.online',
  assetPrefix: '/Staging.Ermers.online',
}

module.exports = nextConfig
