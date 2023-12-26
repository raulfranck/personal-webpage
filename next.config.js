const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = withContentlayer(nextConfig);
