import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set the workspace root to silence the multiple lockfiles warning
  turbopack: {
    root: '/Users/laurensvanrossum/Desktop/Cursor project 3',
  },
};

export default nextConfig;
