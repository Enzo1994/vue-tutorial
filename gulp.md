##

```javascript
var gulp = require('gulp');
var sass = require('gulp-sass);

gulp.task('sass',function(){
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error',sass.logError)
    .pipe(gulp.dest('./src/css))
})

gulp.task('sass:watch',function(){
    gulp.watch('./src/sass/**/*.scss,['sass'])  //监听文件变化，如果指定路径文件改变，则执行sass任务编译
})
```
