/**
 *Created by lvly on 2016/3/3.
 * 首页模块入口文件
*/

define(['jquery','angular','app','router'],function(jquery,angular,app){

    $(document).ready(function(){
        setTimeout(function() {
            angular.bootstrap(document.body, [app.name]);
        }, 0);
    });

});