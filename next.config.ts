import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/demo1',
  assetPrefix: '/demo1/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
