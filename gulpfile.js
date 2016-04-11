var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('default', function() {
    gulp.start('complex');
});

gulp.task('complex', function() {
  return gulp.src([
    './src/**/*.js',
    ])
    .pipe(concat('complex-gui.js'))
    .pipe(gulp.dest('dist/'));
});
