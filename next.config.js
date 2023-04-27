/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTwin = require('./withTwin.js')
const nextConfig = {
  reactStrictMode: true
}

module.exports = withTwin(nextConfig)
