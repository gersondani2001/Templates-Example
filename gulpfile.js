//gulp.js servidor local
const gulp = require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('default', () => {
	browserSync.init({
		server: './'
	});


	gulp.watch('./*.html').on('change',browserSync.reload);
	gulp.watch('./css/style.css').on('change',browserSync.reload);
	gulp.watch('./js/script.js').on('change',browserSync.reload);

})