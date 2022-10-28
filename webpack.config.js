const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        htsa_templates: "./assets/js/htsa-template.js",
        htsa_js: "./assets/js/htsa.js",
        bootstrap_components_js: "./assets/js/htsa-bootstrap-components.js",
        htsa_css: "./assets/js/htsa-css.js",
        bootstrap_components_css: "./assets/js/htsa-scss.js"
    },
    mode: "production",
    output: {
        filename: "js/[name].min.js",
        path: path.resolve(__dirname, "assets/dist")
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
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].min.css',
            ignoreOrder: true
        }),
        new CssMinimizerPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        "default",
                        /* {
                            discardComments: {
                                removeAll: true
                            }
                        } */
                    ]
                }
            }),
            "..."
        ]
    },
    cache: false
};