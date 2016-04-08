var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var wrap = require('gulp-wrap');


gulp.task('b1', function () {
  var b1 = browserify({
    entries: './b1.js',
    standalone: 'b1'
  });

  return b1
    .bundle()
    .pipe(source('b1.js'))
    //.pipe(wrap({src: './umd-template.js'}))
    .pipe(gulp.dest('dist'))
});


gulp.task('b2', function () {

  var b2 = browserify({
    entries: './b2.js'
  });

  return b2
    .bundle()
    .pipe(source('b2.js'))
    .pipe(gulp.dest('dist'))
});

