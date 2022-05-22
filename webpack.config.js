module: {
rules: [
    {
        test: /\.scss$/,
        use: [
            {
                loader: 'style-loader'
            }, 
            {
                loader: 'css-loader',
                modules: true,
            }, 
            {
                loader: 'sass-loader',
                implementation: require('sass'),
                sassOptions: {
                    fiber: require('fibers'),
                },
            }
        ]
    }
  ]
}
devServer: {
    historyApiFallback: true
}