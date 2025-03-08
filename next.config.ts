// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  output: 'export', // Static export
  trailingSlash: true, // Ensures proper static file serving
  images: {
    unoptimized: true, // Required for static export
  },
  // basePath: '', // Leave empty for custom domain at root; adjust if needed
};

module.exports = nextConfig;