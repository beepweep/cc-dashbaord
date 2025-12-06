import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cc-dashbaord',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
