import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
};

const pwaOptions = {
  dest: "public",
  register: true, // Automatically register the service worker
  skipWaiting: true, // Activate the new service worker as soon as possible
};

export default withPWA(pwaOptions)(nextConfig) as NextConfig;
