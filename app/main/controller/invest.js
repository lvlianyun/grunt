/**
 * Created by lvly on 2016/3/3.
 */
define(['main/app'],function(app){

     app.controller('Invest',['MathService',function(MathService){

           var result=MathService.add(1,3);
           console.info("invest-controller add -result="+result);

     }])


})