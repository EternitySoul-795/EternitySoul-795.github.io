import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static export only during build — dev mode stays fully functional
  ...(isProd ? { output: "export", trailingSlash: true } : {}),
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
