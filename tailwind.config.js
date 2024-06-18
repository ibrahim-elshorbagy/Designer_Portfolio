import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: false,
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            keyframes: {
                wave: {
                    "0%": { transform: "rotate(0.0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10.0deg)" },
                    "60%": { transform: "rotate(0.0deg)" },
                    "100%": { transform: "rotate(0.0deg)" },
                },
                slideUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(100%)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },

            animation: {
                "waving-hand": "wave 2s linear infinite",
                slideUp: "slideUp 0.5s ease-out",
            },
        },
    },

    plugins: [forms],
};
