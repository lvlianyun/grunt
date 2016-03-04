/**
 * Created by lvly on 2016/3/3.
 */
define(['angular','main/app','ngRoute'],function(angular,app){

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        console.info('router');


        $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');

        // 注册成功页面
        $routeProvider.when('/',{

        });



    }])



})
