var gulp = require('gulp'); // 引入gulp
var uglify = require('gulp-uglify'); // 引入压缩js的包
var cssnano = require('gulp-cssnano'); // 引入压缩css的包
var concat = require('gulp-concat'); // 引入合并文件的包
var htmlmin = require('gulp-htmlmin'); // 引入压缩html的包
var pug = require('gulp-pug'); // 引入编译pug的包

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
var sourcemaps = require('gulp-sourcemaps'); // 引入 sourcemaps包
// 自动加上 css3 前缀
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
  gulp.src('./assets/less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(cssnano()) // 压缩css
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0', 'Firefox <= 20', 'chrome <=51'],
      cascade: true, //是否美化属性值 默认：true
      remove:true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(sourcemaps.write('./maps')) // 生成sourcemaps
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', function() {
  gulp.watch(['./template/index.pug'],['pug']);
  gulp.watch(['./assets/less/*.less'],['less']);
});
