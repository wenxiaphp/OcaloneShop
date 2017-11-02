var gulp = require('gulp'); // 引入gulp
var uglify = require('gulp-uglify'); // 引入压缩js的包
var cssnano = require('gulp-cssnano'); // 引入压缩css的包
var concat = require('gulp-concat'); // 引入合并文件的包
var htmlmin = require('gulp-htmlmin'); // 引入压缩html的包
var pug = require('gulp-pug'); // 引入编译pug的包

gulp.task('default', function() {
  gulp.watch(['./template/index.pug'],['pug']);
  gulp.watch(['./assets/less/*.less'],['less']);
});

// 压缩JS
gulp.task('js', function() {
  // 把当前文件夹下面的app.js做一个压缩处理，处理完之后放到dist文件夹里面
  gulp.src('./app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

// 压缩HTML
gulp.task('htmlmin',function () {
  gulp.src('./index.html')
    .pipe(htmlmin({
      collapseWhitespace:true,
      minifyCSS:true,
      minifyJS:true
    }))
    .pipe(gulp.dest('./dist'));
});

// pug编译
gulp.task('pug',function(){
  gulp.src('./template/index.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('./')); // dest:destination
});


//编译Less
var less = require('gulp-less'); // 引入编译less的包
var path = require('path');

gulp.task('less', function () {
  gulp.src('./assets/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/css/'));
});
