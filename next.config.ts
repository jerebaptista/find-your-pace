import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: true },
    ];
  },
};

export default nextConfig;
