var
  gulp        = require('gulp'),
  sass        = require('gulp-sass'),
  browserSync = require('browser-sync')
;

gulp.task('sass', function() {
  return gulp
    .src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
  return gulp
    .src('index.html')
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
    gulp.parallel('sass', 'html'),
    'serve',
    function watcher(done) {
      gulp.watch('sass/*.scss', gulp.parallel('sass'));
      gulp.watch('dist/**/*', browserSync.reload);
      done();
    }
  )
);
