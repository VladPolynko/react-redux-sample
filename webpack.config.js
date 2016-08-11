var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        bundle: './main.js',
    },

    output: {
        path: './',
        filename: 'bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/, loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },

    devtool: "source-map",

    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },

    devServer: {
        historyApiFallback: true
    },

    plugins: [
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ]
};
