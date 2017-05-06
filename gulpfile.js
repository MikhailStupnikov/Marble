var gulp = require('gulp'),
	pug = require('gulp-pug'),
	prettify = require('gulp-html-prettify'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');


gulp.task('pug', function() {
	gulp.src('app/pug/*.pug')
		.pipe(pug())
		.pipe(prettify({indent_char: '	', indent_size: 1}))
		.pipe(gulp.dest('app/'));
});


gulp.task('sass', function() {
	gulp.src('app/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css/'));
});


gulp.task('server', ['pug', 'sass'], function() {
	browserSync({
		port: 9000,
		server: {
			baseDir: 'app'
		}
	});
});


gulp.watch('app/pug/**/*.pug', ['pug']);
gulp.watch('app/sass/**/*.sass', ['sass']);
gulp.watch([
	'app/*.html',
	'app/css/*.css',
	'app/js/*.js'
]).on('change', browserSync.reload);


gulp.task('default', ['server']);