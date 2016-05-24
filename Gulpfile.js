var
  gulp        = require('gulp'),
  del         = require('del'),
  sass        = require('gulp-sass'),
  browserSync = require('browser-sync')
  babel       = require('gulp-babel')
  rename      = require('gulp-rename')
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

gulp.task('js', function() {
  return gulp
    .src(['js/*.js', 'js/*.jsx'])
    .pipe(babel({
      presets: ['es2015', 'react']
    }))
    .pipe(rename(function(path) {
      path.extname = '.js';
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('vendor-js', function() {
  return gulp
    .src('vendor/*.js')
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
    gulp.parallel('sass', 'html', 'images', 'js', 'vendor-js'),
    'serve',
    function watch(done) {
      gulp.watch('scss/**/*.scss',  gulp.parallel('sass'));
      gulp.watch('html/*.html',  gulp.parallel('html'));
      gulp.watch(['js/*.js', 'js/*.jsx'], gulp.parallel('js'));
      gulp.watch(['images/*.png', 'images/*.svg'], gulp.parallel('images'));
      gulp.watch('dist/*', browserSync.reload);
      done();
    }
  )
);
