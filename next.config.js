/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongodburl: "mongodb+srv://davidrale311:gIlf0xk4l6JLHHIP@cluster0.ddldvpc.mongodb.net/upwork-toolkit?retryWrites=true&w=majority",
  }
}

module.exports = nextConfig
