const gulp = require("gulp");
const gutil = require('gulp-util');
const cp = require('child_process');
const sass = require('gulp-sass');
const rollup = require('rollup');
const babel = require("rollup-plugin-babel");
const externalHelpers = require('babel-plugin-external-helpers');
const browserSync = require('browser-sync').create();

// Development server
gulp.task('serve', function () {
  browserSync.init(
    ['docs/css/**/*.css', 'docs/js/**/*.js', 'docs/**/*.html'],
    {
      server: {
        baseDir: './docs'
      }
    }
  );

  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('eleventy', function (cb) {
  cp.exec('npx eleventy', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  })
})

gulp.task('eleventy:watch', function () {
  const eleventy = cp.spawn('npx', ['eleventy', '--watch']);

  const eleventyLogger = function (buffer) {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Eleventy: ' + message));
  };

  eleventy.stdout.on('data', eleventyLogger);
  eleventy.stderr.on('data', eleventyLogger);
})

gulp.task('sass', function () {
  return gulp
    .src('src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('docs/css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('src/sass/**/*.scss', ['sass']);
});

gulp.task('js', () => {
  return rollup
    .rollup({ input: "./src/js/rvt-component.js", plugins: [babel()] })
    .then(bundle => {
      return bundle.write({
        file: './docs/js/rvt-component.js',
        format: 'umd',
        name: 'MyComponent',
        sourcemap: true
      });
    })
});

gulp.task('js:watch', () => {
  gulp.watch('src/js/**/*.js', ['js'])
});

gulp.task('watch', ['eleventy:watch', 'sass:watch', 'js:watch'])

gulp.task('default', ['serve', 'watch']);