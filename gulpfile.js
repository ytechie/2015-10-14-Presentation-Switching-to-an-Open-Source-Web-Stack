var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('default', function() {
	console.log('You have a build process!!!');
});

gulp.task('scripts', function() {
	gulp.src('src/**/*.js')
		.pipe(gulp.dest('out'));		
});

gulp.task('scripts:watch', ['scripts'], function() {
	gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('wiredep', function() {
	gulp.src('wiredep.html')
		.pipe(wiredep())
		.pipe(gulp.dest('out'));
});