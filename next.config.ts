import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Needed so that /storybook redirects to /storybook/ (Storybook uses
  // relative asset paths that only work with the trailing slash).
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
