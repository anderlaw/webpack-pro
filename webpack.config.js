
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'production',
    entry: {
        main: './src/main/index.js',
        dream: './src/dream/index.js',
        job: './src/job/index.js'
    },
    output: {
        filename: './[name].bundle.js',
        path: __dirname + '/dist'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpg)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/main/index.html',
            filename:'main.html',
            title:"主页",
            hash:true,
            chunks:['main']
        }),
        new HtmlWebpackPlugin({
            template:'./src/job/index.html',
            filename:'job.html',
            title:"职位",
            hash:true,
            chunks:['job']
        }),
        new HtmlWebpackPlugin({
            template:'./src/dream/index.html',
            filename:'dream.html',
            title:"梦想",
            hash:true,
            chunks:['dream']
        })
    ]
}