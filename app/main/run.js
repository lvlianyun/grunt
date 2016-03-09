/**
 *Created by lvly on 2016/3/3.
 * 首页模块入口文件
*/
define([ 'angular','jquery','main/app', 'main/router','main/controller/invest'],function(angular,$,app) {

    $(document).ready(function() {
        setTimeout(function() {
            angular.bootstrap(document.body, [ app.name ]);
        }, 0);
    });
});
