var gulp = require('gulp');

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
	