var webpack = require('webpack')

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "./build/bundle.js"
    },
    module: {
      loaders: [
        { test: /\.vue$/, loader: "vue" }
      ]
    },
    resolve: {
      modulesDirectories: ["bower_components", "node_modules"]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        )
    ]
};