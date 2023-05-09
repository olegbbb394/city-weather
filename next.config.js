// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['openweathermap.org']
//   },
// }
//
// module.exports = nextConfig

const path = require("path");

/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['openweathermap.org']
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  output: 'standalone',
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  }
};

module.exports = nextConfig;