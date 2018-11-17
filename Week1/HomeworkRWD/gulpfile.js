var gulp = require('gulp'),
           browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function(){
    gulp.watch('app/index.html', browserSync.reload);
    gulp.watch('app/css/style.css', browserSync.reload);
});