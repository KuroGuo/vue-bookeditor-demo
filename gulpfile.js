var gulp = require('gulp')
var gulpWebpack = require('gulp-webpack')
var webpack = require('webpack')
var fs = require('fs')

gulp.task('webpack-dev', function() {
  gulp.src('src/main.js')
    .pipe(gulpWebpack({
      entry: './src/main.js',
      output: {
        filename: 'bundle.js'
      },
      devtool: '#source-map',
      module: {
        loaders: [
          { test: /\.vue$/, loader: 'vue' }
        ]
      },
      resolve: {
        modulesDirectories: ['bower_components', 'node_modules']
      },
      plugins: [
        new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        )
      ]
    }))
    .pipe(gulp.dest('./build/'))
})

gulp.task('webpack-build', function() {
  fs.readdirSync('./build/').forEach(function (file) {
    fs.unlinkSync('./build/' + file)
  })

  gulp.src('src/main.js')
    .pipe(gulpWebpack({
      entry: './src/main.js',
      output: {
        filename: 'bundle.js'
      },
      module: {
        loaders: [
          { test: /\.vue$/, loader: 'vue' }
        ]
      },
      resolve: {
        modulesDirectories: ['bower_components', 'node_modules']
      },
      plugins: [
        new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
        })
      ]
    }))
    .pipe(gulp.dest('./build/'))
})

gulp.task('default', ['webpack-dev'], function () {
  gulp.watch('./src/**/*', ['webpack-dev'])
})

gulp.task('build', ['webpack-build'])