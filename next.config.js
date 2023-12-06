/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "drive.google.com",
                port: "",
                pathname: "/drive/**",
            },
        ],
    },
    trailingSlash: false,
};

module.exports = nextConfig;
