//先导入依赖模块
const gulp = require('gulp'),
	  sass = require('gulp-sass');
//	  imagemin = require('gulp-imagemin');
	 
gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	//.pipe(cleanCss())
	//.pipe(rename({'suffix' : '.min'}))
	.pipe(gulp.dest('./dist/css'));
})
gulp.task('default',()=>{
	gulp.watch(['./src/sass/*.scss'],['sass']);
})

//打包图片任务
//gulp.task('img',function(){
//	
//	gulp.src('./src/img/index/*.*')
//	.pipe(imagemin())
//  .pipe(gulp.dest('./dist/img/index'))
//})
