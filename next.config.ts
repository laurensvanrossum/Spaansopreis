import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep this portable across machines/CI (avoid hard-coded absolute paths)
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
