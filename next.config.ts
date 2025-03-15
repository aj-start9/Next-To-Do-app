import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",         // When the user visits "/"
        destination: "/dashboard", // Redirect to "/dashboard"
        permanent: false,    // Temporary redirect (use true for SEO-friendly 308 redirect)
      },
    ];
  },
};

export default nextConfig;
