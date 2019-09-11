const  path = require("path")

const ExtractTextPlugin = require('extract-text-webpack-plugin')


const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    entry: {
        main: "./src/main"
    },
    output: {
        path: path.join(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'vue-style-loader'
                    })
                }
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },{
                test: /\.(git|png|jpg|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new VueLoaderPlugin()
    ]
};

module.exports = config;