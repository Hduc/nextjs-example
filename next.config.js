/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.ts',
  // },
}

module.exports = nextConfig
