/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            'hero-pattern': "url('/home/adedotun/game_ayo/src/assets/ayobackground.gif')",
        },
    },
    plugins: [],
}