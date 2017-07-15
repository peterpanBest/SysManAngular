//引入模块   node commonjs 

//模块化规范：如何导入模块和如何导出模块 （单个的js文件）

//通过require来导入模块，通过npm下载的，存在与node_modules文件夹的模块直接写名字
var gulp=require('gulp');
//热更新服务模块
var webserver = require('gulp-webserver');

//创建服务任务   
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      host:"localhost",
      port:1234,
      directoryListing:{//是否显示目录列表，如果不写的话，会直接打开index.html
      	enable:true,
      	path:'./page/**.html'
      },
      livereload:true
    }));
});

//创建一个默认任务
gulp.task("default",['webserver'],function(){
	console.log('server is running...')
})




