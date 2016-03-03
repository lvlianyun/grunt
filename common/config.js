/**
 * Created by lvly on 2016/3/3.
 */
require.config({
    /* baseUrl: '/',*////根目录配置*/ //没有配置 则默认为data-main 所在文件夹 的路径
    paths: {
        'angular':'../assets/angular',
        'ngResource':'../assets/angular-resource',
        'ngRoute':'../assets/angular-route',
        'jquery':'../assets/jquery'
    },
    shim:{
        angular:{
            exports: 'angular'//angular　非ａｍｄ　模式　转为ａｍｄ　模式
        },
        ngRoute:{
            exports:'ngRoute'
        }
    },
    vars:{

    }
});