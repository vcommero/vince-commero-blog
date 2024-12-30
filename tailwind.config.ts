import type { Config } from "tailwindcss";
import {
    content as flowbiteContent,
    plugin as flowbitePlugin,
} from "flowbite-react/tailwind";

export default {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

        flowbiteContent(),
    ],
    theme: {
        extend: {
            // Color palette
            colors: {
                primary: {
                    DEFAULT: "var(--color-primary, #3b82f6)",
                    light: "var(--color-primary-light, #60a5fa)",
                    dark: "var(--color-primary-dark, #2563eb)",
                },
                secondary: {
                    DEFAULT: "var(--color-secondary, #10b981)",
                    light: "var(--color-secondary-light, #34d399)",
                    dark: "var(--color-secondary-dark, #059669)",
                },
            },
        },
    },
    plugins: [flowbitePlugin()],
} satisfies Config;
