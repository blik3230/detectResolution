var gulp        = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();


var path = {
	watch: {
		js: './js/**/*.js',
		html: './**/*.html'
	}
};

var configServ = {
	server: {
		baseDir: "./"
	},
	//tunnel: true,
	host: 'localhost',
	port: 9000,
	logPrefix: "srv-->"
};

// Static server
gulp.task('server', function() {
    browserSync.init(configServ);
});


//watch
gulp.task('watch', function (cb) {

    watch(path.watch.js, function () {
        browserSync.reload()
        console.log('js')
    });

    watch(path.watch.html, function () {
        browserSync.reload()
        console.log('html')
    });
});


// default task
gulp.task('default', ['server', 'watch']);