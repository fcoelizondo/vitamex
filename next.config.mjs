/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  // En GitHub Pages el sitio vive bajo /<repo>/; local queda en raíz.
  basePath: process.env.BASE_PATH || "",
  images: { unoptimized: true },
};

export default nextConfig;
