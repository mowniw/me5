const gulp = require('gulp');
const jade = require('gulp-jade');
const less = require('gulp-less');
const sass = require('gulp-sass');
const stylus = require('gulp-stylus');

gulp.task('jade', function () {
  return gulp
    .src('src/jade/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('build/jade'))
})

gulp.task('less', function () {
  return gulp
    .src('src/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('build/css'))
})

gulp.task('sass', function () {
  return gulp
    .src('src/sass/**/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
})

gulp.task('stylus', function () {
  return gulp
    .src('src/stylus/**/*.stylus')
    .pipe(stylus())
    .pipe(gulp.dest('build/css'))
});

gulp.task('default', gulp.parallel('jade', 'sass', 'stylus', 'less'));