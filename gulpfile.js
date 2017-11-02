// 引入gulp
var gulp = require('gulp');
// 引入压缩js的包
var uglify = require('gulp-uglify');
// 引入压缩css的包
var cssnano = require('gulp-cssnano');
// 引入合并文件的包
var concat = require('gulp-concat');
// 引入压缩html的包
const htmlmin = require('gulp-htmlmin');
// 引入编译pug的包
var pug = require('gulp-pug');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log('测试');
});

gulp.task('script', function() {
  // 把当前文件夹下面的app.js做一个压缩处理，处理完之后放到dist文件夹里面
  gulp.src('./app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('pug',function(){
  gulp.src('./template/index.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('./')); // dest:destination
});

gulp.task('htmlmin',function () {
  // 把index.html压缩 --> dist
  gulp.src('./index.html')
    .pipe(htmlmin({
      collapseWhitespace:true,
      minifyCSS:true,
      minifyJS:true
    }))
    .pipe(gulp.dest('./dist'));
});

// gulp.watch 监视文件变化，执行响应任务
gulp.task('dog',function(){
  gulp.watch('./template/index.pug',['pug'])
});
