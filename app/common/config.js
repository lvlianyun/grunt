/**
 * Created by lvly on 2016/3/3.
 */
require.config({
    /* baseUrl: './',*///////根目录配置*/ //没有配置 则默认为data-main 所在文件夹 的路径
    paths: {
        'angular':'assets/angular/angular',
        'ngResource':'assets/angular/angular-resource',
        'ngRoute':'assets/angular/angular-route',
        'jquery':'assets/jquery/jquery',
        'require':'assets/require/require',
        'jquery.ui.widget':'assets/jquery/jquery.ui.widget',
        'jquery.fileupload':'assets/jquery/jquery.fileupload',
        'jquery.iframe.transport':'assets/jquery/jquery.iframe-transport'

    },
    shim:{
        angular:{
            exports: 'angular'//angular　非ａｍｄ　模式　转为ａｍｄ　模式
        },
        ngRoute:{
            exports:'ngRoute',
            deps:['angular']
        },
        ngResource:{
            exports:'ngResource',
            deps:['angular']
        }
    }
});