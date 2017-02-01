var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js?[hash]"
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
};