const gulp = require('gulp');
const gulpSourcemaps = require('gulp-sourcemaps');
exports.default = function() {
  return gulp.src('src/**/*.js', {sourcemaps: true})
    .pipe(gulpSourcemaps.write('.', {
      sourceRoot: '../src/'
    }))
    .pipe(gulp.dest('dist'));
};
