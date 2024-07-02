const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js', 
    mode: 'development',
    output: {
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            favicon: './src/assets/tabpic.jpg',
        })
    ], 
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i, 
                type: 'asset/resource', 
            }, 
        ]
    }
};