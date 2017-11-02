var gulp = require('gulp');
var uglify = require('gulp-uglify');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log('测试');
});

gulp.task('script', function(){
  // 把当前文件夹下面的app.js做一个压缩处理，处理完之后放到dist文件夹里面
  gulp.src('./app.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist'));
});
