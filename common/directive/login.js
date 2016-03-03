define(function(require, exports, module) {

    var daren = require('daren/daren'),
    	angular = require('angular');


    daren.directive('darenLogin', ['$location', function($location) {
        return {
            restrict: 'A',
            link: function(scope,elm, tAttrs) {
            	elm.click(function() {
            		window.open('/passport/login?_returnURI=' + $location.$$url, '_self');
                    return false;
            	});
            }
        };
    }]);

});