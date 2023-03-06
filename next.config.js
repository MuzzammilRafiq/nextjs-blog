/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = {
  nextConfig,
  webpack: (config) => {
    config.resolve.alias["@models"] = require("path").join(
      __dirname,
      "/models"
    );
    return config;
  },
};
