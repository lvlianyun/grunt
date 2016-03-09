/**
 * Created by lvly on 2016/3/3.
 */
define(['angular','ngResource'],function(angular,ngResource){

   /* // 获取 daren.js 所在路径，需要 require.path 中有配置 daren 项
    var commonPath = require.toUrl('app'),
    // 配置对象，可通过注入获取
        config = {
            path: commonPath.slice(0, commonPath.lastIndexOf('common'))
        };


    console.info('commonpaht=='+commonPath);
*/
    return angular.module('common',['ngResource'])
});