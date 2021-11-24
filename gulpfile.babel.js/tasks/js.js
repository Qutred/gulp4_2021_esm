import webpackStream from 'webpack-stream'
import webpack from 'webpack'

const js = () => {
  return $.gulp
    .src($.path.js.src, { sourcemaps: $.app.isDev })
    .pipe(
      $.gp.plumber({
        errorHandler: $.gp.notify.onError((error) => ({
          title: 'JS',
          message: error.message,
        })),
      })
    )
    .pipe($.gp.babel())
    .pipe(webpackStream($.app.webpack, webpack))
    .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
    .pipe($.browserSync.stream())
}

export default js
