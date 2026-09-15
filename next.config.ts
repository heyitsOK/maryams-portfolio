import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "charlatan.ca",
      },
      {
        protocol: "https",
        hostname: "capitalcurrent.ca",
      },
      {
        protocol: "https",
        hostname: "www.rootsmusic.ca",
      },
    ],
  }
};

export default nextConfig;
