/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API, // Assuming you have a NEXT_PUBLIC_API_KEY in .env or .env.local
  },
  images: {
    domains: ["img.clerk.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-blog.novoresume.com",
        port: "",
        pathname:
          "/articles/modern-resume-templates/modern-resume-templates.png",
      },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: ["@react-pdf/renderer"],
  },
};

export default nextConfig;
