var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'build/build': ['./src/main.js'],
        'build/subtle': ['./src/subtle.js'],
        'firefox/build': ['./src/main.js'],
        'firefox/subtle': ['./src/subtle.js']
    },
    output: {
        path: path.resolve(__dirname),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    }
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi]
        })
    ]
} else {
    module.exports.devtool = '#source-map'
}
