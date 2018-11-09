var gulp = require('gulp')
var less = require('gulp-less')
var pug = require('gulp-pug')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var browserSync = require('browser-sync')
var gutil = require('gulp-util')
var del = require('del')

gulp.task('clean', function() {
  return del.sync('./dist')
})

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './dist'
    },
    notify: false
  })
})

gulp.task('html', function() {
  return gulp.src('./html/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('pug', function() {
  return gulp.src('./templates/**/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('assets', function() {
  return gulp.src('./assets/**/*')
    .pipe(gulp.dest('./dist/assets'))
})

gulp.task('scripts', function() {
  return gulp.src('./scripts/**/*.js')
    .pipe(gulp.dest('./dist/assets/scripts'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('lib', function() {
  return gulp.src('./lib/**/*')
    .pipe(gulp.dest('./dist/assets/lib'))
})

gulp.task('less', function() {
  return gulp.src('./less/*.less')
    .pipe(less({ compress: true }).on('error', gutil.log))
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(minifyCSS({ keepBreaks: false }))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(browserSync.reload({ stream: true }))
})

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('./less/**/*.less', ['less'])
  gulp.watch('./scripts/**/*.js', ['scripts'])
})

gulp.task('static', ['clean', 'assets', 'less', 'scripts', 'lib', 'html', 'watch'], function() {
  gulp.watch('./html/**/*.html', ['html'])
})

gulp.task('default', ['clean', 'assets', 'less', 'scripts', 'lib', 'pug', 'watch'], function() {
  gulp.watch('./templates/**/*.pug', ['pug'])
})