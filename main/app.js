/**
 * Created by lvly on 2016/3/3.
 */
define(['angular','ngRoute','common/common-all','module'],function(angular,ngRoute,commonApp,module){

     var appName=module.config().appName;

      var app=angular.module(appName,['ngRoute','common']);

      return app;

})
