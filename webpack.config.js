const path = require('path');

module.exports = {
    entry: "./assets/js/htsa-template.js",
    mode: "production",
    output: {
        filename: "htsa-template-bundled.js",
        path: path.resolve(__dirname, "assets/js")
    },
    resolve: {
        fallback: {
            is_defined: path.resolve(__dirname, "assets/js/helpers/is-defined.js"),
            not_empty: path.resolve(__dirname, "assets/js/helpers/not-empty.js"),
            not_empty_array: path.resolve(__dirname, "assets/js/helpers/not-empty-array.js")
        },
        modules: [
            path.resolve(__dirname, "assets/js/helpers")
        ]
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                use: "handlebars-loader"
            }
        ]
    }
};