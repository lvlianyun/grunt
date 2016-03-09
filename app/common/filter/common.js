/**
 * Created by lvly on 2016/2/22.
 */
define(['common/app'], function (app) {

    app.filter("riskLevel", function () {
        return function (input) {
            var rands = input + "";
            var colorName = {
                '1': 'red',
                '2': 'orange',
                '3': 'yellow',
                '4': 'green',
                '5': 'blue',
                '6': 'black',
                '7': 'purple'
            }

            return colorName[rands];

        }
        /**
         * 百分比过滤器 percent
         */
    }).filter('percent', function () {

        return function (input, flag) {
            input = +input || 0;

            return (Math.round((flag ? input / 100 : input * 100) * 100) / 100).toFixed(2) + '%';
        };
    }).filter('yearRatePercent', function () {

            return function (input) {


                function changeTwoDecimal_f(x) {

                    var f_x = x * 10000 * 100 / 10000;

                    var s_x = f_x.toFixed(2).toString();

                    var pos_decimal = s_x.indexOf('.');
                    if (pos_decimal < 0) {
                        pos_decimal = s_x.length;
                        s_x += '.';
                    }
                    while (s_x.length <= pos_decimal + 2) {
                        s_x += '0';
                    }

                    return s_x;
                }


                return (input ? changeTwoDecimal_f(input) : 0.00) + '%';

            };
        })
        /**
         * 人民币大写过滤器
         */
        .filter('RMB', function () {

            return function (input) {

                return (!input && input !== 0) ? input : rmbconver(input);
            };
        });
});
