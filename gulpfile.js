var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('default', function() {
    gulp.start('complex');
});

gulp.task('complex', function() {
  return gulp.src([
    './src/Model/GuiScript.js',
    './src/Model/GuiClickScript.js',
    './src/System/DOMGuiSystem.js',
    ])
    .pipe(concat('complex-gui.js'))
    .pipe(gulp.dest('dist/'));
});
