define(function(require, exports, module) {

    var angular = require('angular'),
    daren = require('daren/daren');
    
    daren.directive('autofill', ['$timeout', function ($timeout) {
        return {
            scope: true,
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
            	    
                           $timeout(function(){
                              $(elem[0]).trigger('input');
                              // elem.trigger('input'); try this if above don't work
                           },200);
                  }
        };
    }]);
});