import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/web-laura",
  assetPrefix: "/web-laura/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
