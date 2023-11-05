import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontSize: {
                14: "14px",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-pattern": "url('/welcome-bg.svg')",
            },
            backgroundColor: {
                "main-bg": "#FAFBFB",
                "main-dark-bg": "#20232A",
                "secondary-dark-bg": "#33373E",
                "light-gray": "#F7F7F7",
                "half-transparent": "rgba(0, 0, 0, 0.5)",
            },
            borderWidth: {
                1: "1px",
            },
            borderColor: {
                color: "rgba(0, 0, 0, 0.1)",
            },
            width: {
                400: "400px",
                760: "760px",
                780: "780px",
                800: "800px",
                1000: "1000px",
                1200: "1200px",
                1400: "1400px",
            },
            height: {
                80: "80px",
            },
            minHeight: {
                590: "590px",
            },
        },
    },
    plugins: [],
};
export default config;
