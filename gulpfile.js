const gulp = require('gulp')
const babel = require('gulp-babel')
const gutil = require('gulp-util')
const peg = require('gulp-peg')

gulp.task('default', function() {
  return gulp.src('index.js')
    .pipe(babel())
    .pipe(gulp.dest('build'))
})

gulp.task('test:build', function() {
  return gulp.src('test/*.test.js')
    .pipe(babel())
    .pipe(gulp.dest('build/test'))
})

gulp.task('peg', function() {
  return gulp.src('src/peg/*.pegjs')
    .pipe(peg().on('error', gutil.log))
    .pipe(gulp.dest('build/peg'))
})
