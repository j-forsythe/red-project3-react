'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var rename = require('rename');

var sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');
    cssnano = require('gulp-cssnano');

gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./build/css'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build/css'));
});


gulp.task('compile-react', function() {
	return gulp.src('main.jsx')
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('browser-sync', ['compile-react'], function() {

	browserSync.init({
		server: './'
	});

	gulp.watch(['main.jsx'], ['compile-react']);
	gulp.watch(['main.js', 'index.html']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
