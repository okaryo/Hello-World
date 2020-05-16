const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: [".mjs", ".js", ".svelte"],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].css" })
    ],
    devServer: {
        port: 8080,
        contentBase: "./",
        publicPath: "/dist/",
        open: true
    }
};
