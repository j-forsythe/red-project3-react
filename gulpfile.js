'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');

gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./build'))
      .pipe(cssnano())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build'));
});


gulp.task('compile-react', function() {
	gulp.src('./**/*.jsx')
		.pipe(plumber())
		.pipe(webpack({
        entry: {
          main: './main.jsx'
        },
        watch: true,
        output: {
          publicPath: '',
          filename: 'main.js'
        },
        module: {
          loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['es2015', 'react']
            }
          }]
        }
      }))
		.pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', ['compile-react'], function() {

	browserSync.init({
		server: './'
	});

	gulp.watch(['main.jsx'], ['compile-react']);
  gulp.watch('sass/*.scss', ['sass']);
	gulp.watch(['build/main.js', 'index.html', 'build/*.min.css']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
