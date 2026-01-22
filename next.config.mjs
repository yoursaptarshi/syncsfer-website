/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove 'output: export' for Vercel deployment
  // Vercel supports Next.js natively, no need for static export
  trailingSlash: true,
  images: {
    unoptimized: false, // Vercel supports image optimization
  },
}

export default nextConfig
