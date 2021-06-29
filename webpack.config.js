const path = require('path');

module.exports = {
    // mode: 'development',
    devtool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};