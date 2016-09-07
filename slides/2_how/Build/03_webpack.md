### Webpack example

```
module.exports = {
  entry: './src/app.ts',
  output: './dist/app.js',
 
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
```