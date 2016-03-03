define(function(require, exports, module) {

	var daren = require('daren/daren');
 
	 daren.directive('darenBtnSubmit', function() {
		return {
			restrict : 'A',
			compile: function link(elm, tAttrs,transclude) {

				var text='';
				// 新增效果
				elm.bind('click', function() {
							
					text = elm.html();
				
					elm.html('');
					
					elm.append("<img src='/common/images/silder/22.gif' />");
					
					elm.append('&nbsp;提交中');
			
					elm.attr('disabled', true);
				
					elm.attr('butnText',text);
				});

				return function  (scope, elm, attr, ngModelCtrl) {
		
					scope.cancelSubEff=function(id)
					{
						/**
						 * 如果一个页面有多个指令需要按照ID区分
						 */
						if (id) {
						
							var dom = $('#'+id);
						    dom.html(dom.attr('butnText'));
							dom.attr('disabled', false);
							dom.show();
						}
						
                        elm.html(text);
						elm.attr('disabled', false);
						elm.show();
						
					}
						
				}
			}
		}
	});
});