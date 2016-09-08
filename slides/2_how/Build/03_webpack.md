### Webpack example

```
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
};
```
