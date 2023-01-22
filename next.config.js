/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      "raw.githubusercontent.com",
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "archives.bulbagarden.net",
    ],
  },
};

module.exports = nextConfig;
