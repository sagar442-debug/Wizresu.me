/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "edge", // Enable edge capabilities for routing
  },
  env: {
    // Add only the environment variables you need to access client-side
    GOOGLE_API_KEY: process.env.GOOGLE_API, // Assuming you have a NEXT_PUBLIC_API_KEY in .env or .env.local
  },
};

export default nextConfig;
