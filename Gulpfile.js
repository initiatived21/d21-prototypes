var
  gulp = require('gulp'),
  sass = require('gulp-sass')
;

gulp.task('sass', function() {
  return gulp
    .src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', function() {
  return gulp
    .src('index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('default',
  gulp.parallel('sass', 'copy')
);
