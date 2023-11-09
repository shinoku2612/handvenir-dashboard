/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "drive.google.com",
            },
        ],
    },
    trailingSlash: false,
};

module.exports = nextConfig;
