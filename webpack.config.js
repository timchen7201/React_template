const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    
    entry:"./src/index.js",
    output: {
        path: __dirname,
        filename: "index_bundle.js"
    },
    module:{
       rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
                
            },
            {
                // test: '/\.(js|jsx)$/' 
                test: /\.js$/,
                exclude: /node_moudule/,
                use: {
                    loader: 'babel-loader'
                }
            }    
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "First React",
            template:'./src/index.html'
        })
    ]
}