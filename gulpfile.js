var gulp = require('gulp');
var sass = require('gulp-sass');
var embedTemplates = require('gulp-angular-embed-templates');

gulp.task('template', function () {
    gulp.src('src/**/*.js')
        .pipe(embedTemplates())
        .pipe(gulp.dest('./dist'));
});

gulp.task('styles', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});


gulp.task('build', ['template', 'styles']);
