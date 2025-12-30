/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  output: 'export',
  basePath: "/artist-portfolio",
  assetPrefix: "/artist-portfolio/",

}
export default nextConfig