import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generate unique build IDs to prevent chunk caching issues
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  
  // Optimize for production
  reactStrictMode: true,
  
  // Better error handling
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
