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

  // Webpack optimization for better chunk loading
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize chunk splitting for better reliability
      config.optimization = {
        ...config.optimization,
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk
            vendor: {
              name: "vendor",
              chunks: "all",
              test: /node_modules/,
              priority: 20,
            },
            // Common chunk
            common: {
              name: "common",
              minChunks: 2,
              chunks: "all",
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        },
      };
    }
    return config;
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
