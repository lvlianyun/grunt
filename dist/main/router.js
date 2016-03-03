/**
 * Created by lvly on 2016/3/3.
 */
define(['angular','app'],function(angular,app){

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        //$locationProvider.hashPrefix('!');

        // 注册成功页面
        //$routeProvider.when('/',

        console.info('config');


    }])



})
