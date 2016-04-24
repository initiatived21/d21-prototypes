var
  gulp        = require('gulp'),
  del         = require('del'),
  sass        = require('gulp-sass'),
  browserSync = require('browser-sync')
;

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('sass', function() {
  return gulp
    .src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
  return gulp
    .src('html/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', function(done) {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });
  done();
});

gulp.task('default',
  gulp.series(
    'clean',
    gulp.parallel('sass', 'html'),
    'serve',
    function watch(done) {
      gulp.watch('sass/*.scss', gulp.parallel('sass'));
      gulp.watch('html/*.html', gulp.parallel('html'));
      gulp.watch('dist/*', browserSync.reload);
      done();
    }
  )
);
