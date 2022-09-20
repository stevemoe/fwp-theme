/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./javascripts/**/*.{html,js,hbs}", "./common/**/*.html", "./common/**/*.html"],
    theme: {
        fontFamily: {
            'explorer': ['Explorer']
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': ['5rem', '6rem']
        },
        extend: {},
        colors: {
            'blue': '#8aa0bc',
            'purple': '#9787ab',
            'pink': '#ff49db',
            'orange': '#f49c86',
            'green': '#9fc9c2',
            'turquoise': '#9fc9c2',
            'yellow': '#f9d973',
            'gray-dark': '#646464',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'black': '#001725',
            'white': '#fbfaf8',
            'gray-border': '#cacaca'
        },
    },
    plugins: [],

    corePlugins: {
        // ...
        preflight: false,
        backdropOpacity: false,
        backgroundOpacity: false,
        borderOpacity: false,
        divideOpacity: false,
        ringOpacity: false,
        textOpacity: false
    },
}
