/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'newk.mo.cloudinary.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
