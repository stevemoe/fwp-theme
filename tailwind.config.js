/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./javascripts/**/*.{html,js,hbs}", "./common/**/*.html", "./common/**/*.html"],
    theme: {
        extend: {},
    },
    plugins: [],

    corePlugins: {
        // ...
        backdropOpacity: false,
        backgroundOpacity: false,
        borderOpacity: false,
        divideOpacity: false,
        ringOpacity: false,
        textOpacity: false
    },
}
