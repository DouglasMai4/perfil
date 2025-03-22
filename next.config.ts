import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/DouglasMai4*',
        search: '',
      },
    ],
  },
};

export default nextConfig;
