/** @type {import('next').NextConfig} */
// Site de usuário (natiivaz.github.io): servido na raiz do domínio, sem basePath.
const basePath = ""

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
}

export default nextConfig
