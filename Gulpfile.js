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
    .src('style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'));
});

gulp.task('html', function() {
  return gulp
    .src('html/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp
    .src(['images/*.png', 'images/*.svg'])
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', function(done) {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    port: 4000,
    ui: {
      port: 4001
    }
  });
  done();
});

gulp.task('default',
  gulp.series(
    'clean',
    gulp.parallel('sass', 'html', 'images'),
    'serve',
    function watch(done) {
      gulp.watch('scss/**/*.scss',  gulp.parallel('sass'));
      gulp.watch('html/*.html',  gulp.parallel('html'));
      gulp.watch(['images/*.png', 'images/*.svg'], gulp.parallel('images'));
      gulp.watch('dist/*', browserSync.reload);
      done();
    }
  )
);
