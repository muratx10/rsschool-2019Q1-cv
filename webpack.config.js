const path = require('path');



const config = {
    entry: {
        'script': './script.js'
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    }
}


module.exports = (env, options) => {
    config.devtool = options.mode === 'production' ?
        false :
        "cheap-module-eval-source-map";
    return config;
}
