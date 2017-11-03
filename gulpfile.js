var gulp = require('gulp'), // 引入gulp
  cssnano = require('gulp-cssnano'), // 引入压缩css的包
  pug = require('gulp-pug'); // 引入编译pug的包

// 编译pug
gulp.task('pug', function() {
  gulp.src('./demo/pug/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./demo/pug/html')); // dest:destination
});

//编译Less
var less = require('gulp-less'); // 引入编译less的包
var path = require('path');
var sourcemaps = require('gulp-sourcemaps'); // 引入 sourcemaps包
// 自动加上 css3 前缀
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function() {
  gulp.src('./assets/less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(cssnano()) // 压缩css
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'Android >= 4.0', 'Firefox <= 20', 'chrome <=51'],
      cascade: true, //是否美化属性值 默认：true
      remove: true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(sourcemaps.write('./maps')) // 生成sourcemaps
    .pipe(gulp.dest('./assets/css/'));
});

// 默认项目为监视器
gulp.task('default', function() {
  gulp.watch(['./template/*.pug'], ['pug']);
  gulp.watch(['./assets/less/*.less'], ['less']);
});
