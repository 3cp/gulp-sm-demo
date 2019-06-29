const gulp = require('gulp');

exports.default = function() {
  return gulp.src('src/**/*.js', {sourcemaps: true})
    .pipe(gulp.dest('dist', {sourcemaps: '.'}));
};
