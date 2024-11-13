/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API, // Assuming you have a NEXT_PUBLIC_API_KEY in .env or .env.local
  },
};

export default nextConfig;
