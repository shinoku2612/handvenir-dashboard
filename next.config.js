/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "drive.google.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
    trailingSlash: false,
};

module.exports = nextConfig;
