/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  distDir: "build",
  images: {
    unoptimized: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "",
  trailingSlash: true,
};

export default nextConfig;
