/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{ts,tsx,js,jsx}",
        "./src/components/**/*.{ts,tsx,js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "hsl(var(--brand))",
                    fg: "hsl(var(--brand-foreground))",
                },
            },
        },
    },
    plugins: [],
};

export default config;
