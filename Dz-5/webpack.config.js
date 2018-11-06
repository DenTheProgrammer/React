const path=require("path");

module.exports={
    entry:{
        main: './src/App.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        overlay:true,
        port: 9000
    }
};