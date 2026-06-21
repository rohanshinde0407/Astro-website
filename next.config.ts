import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deployed on Zoho Catalyst "Slate", which runs this app as a Next.js server
  // via OpenNext (not a static `output: "export"`). Slate does not serve the
  // /public folder, so images are imported as modules and emitted to
  // /_next/static/media, which Slate does serve. Keep images unoptimized so no
  // server-side image optimizer is required.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
