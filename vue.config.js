module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ],
    }
  },
  lintOnSave: false
}
