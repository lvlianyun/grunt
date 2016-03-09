define([
    'common/app',
    'jquery.ui.widget',
    'jquery.iframe.transport',
    'jquery.fileupload'

], function(app) {

    app.directive('singleFileupload', [function() {

            return {
                templateUrl:'views/single-fileupload.html',
                replace: true,
                scope: {
                    fileId: '='
                },
                link: function(scope, element, attrs) {

                    // 当单击外围控件，调用input file 单击方法
                    element.find('.file-label').click(function(e) {
                        element.find('input[type=file]').click();
                        e.preventDefault();
                    });

                    element.find('.remove').click(function(e) {
                        scope.$emit('removefile');
                        e.preventDefault();
                    });

                },
                controller: ['$scope', function($scope) {

                    angular.extend($scope, {
                        fileName: 'No File ...',
                        iconClass: 'fa-upload'
                    });

                    // 当文件上传完成
                    $scope.$on('fileuploaddone', function(e, data) {

                        $scope.$apply(function() {

                            angular.extend(
                                $scope, createAttachFile(data.result[0]));
                            $scope.selected = true;
                        });
                    });

                    $scope.$on('removefile', function() {

                        $scope.$apply(function() {
                            $scope.fileId = '';
                            $scope.fileName = 'No File ...';
                            $scope.selected = false;
                            $scope.iconClass = 'fa-upload';
                        });
                    });

                }]
            }
        }])

        /**
         * 多附件上传组件
         */
        .directive('multipleFileupload', ['darenConfig', '$http', function(darenConfig, $http) {
            return {
                templateUrl:  'views/multiple-fileupload.html',
                replace: true,
                scope : {
                    addfileIds: '=',
                    delfileIds: '=',
                    filegroupId: '='
                },
                link: function(scope, element, attrs) {

                    // 当单击外围控件，调用input file 单击方法
                    element.find('.file-label').click(function(e) {

                        element.find('input[type=file]').click();
                        e.preventDefault();
                    });
                },
                controller: ['$scope', function($scope) {

                    angular.extend($scope, {
                        addfileIds: $scope.addfileIds || '',
                        delfileIds: $scope.delfileIds || '',
                        files: []
                    });

                    // 当文件上传完成
                    $scope.$on('fileuploaddone', function(e, data) {

                        $scope.$apply(function() {
                            var file = data.result[0];

                            $scope.files.push(createAttachFile(file));
                            $scope.addfileIds += ',' + file.id;
                        });
                    });

                    $scope.remove = function(file) {

                        var files = $scope.files,
                            i = files.length;

                        $scope.delfileIds += ',' + file.fileId;
                        $scope.addfileIds = $scope.addfileIds.replace(',' + file.fileId, '')
                        while(i--) if(files[i] === file) {
                            files.splice(i, 1);
                            break;
                        }
                    };
                    
                    $scope.$watch('filegroupId', function(newVal, oldVal, scope) {
                    	if(newVal) $http.get('rf/attachment/' + newVal).success(function(data) {
                        	for(var i = 0 ; i < data.length ; i++) {
                        		scope.files.push(createAttachFile(data[i]));
                        	}
                        });
                    });
                }]
            }
        }])

        /**
         * 基础上传组件
         */
        .directive('basicFileupload', [function() {

            return {
                link: function(scope, element, attrs) {

                    // jquery file upload 配置对象
                    var config = {
                        url: 'rf/attachment'
                    };

                    // 转发 jquery file upload 事件
                    element.fileupload(config).on([
                        'fileuploadadd',
                        'fileuploadsubmit',
                        'fileuploadsend',
                        'fileuploaddone',
                        'fileuploadfail',
                        'fileuploadalways',
                        'fileuploadprogress',
                        'fileuploadprogressall',
                        'fileuploadstart',
                        'fileuploadstop',
                        'fileuploadchange',
                        'fileuploadpaste',
                        'fileuploaddrop',
                        'fileuploaddragover',
                        'fileuploadchunksend',
                        'fileuploadchunkdone',
                        'fileuploadchunkfail',
                        'fileuploadchunkalways',
                        'fileuploadprocessstart',
                        'fileuploadprocess',
                        'fileuploadprocessdone',
                        'fileuploadprocessfail',
                        'fileuploadprocessalways',
                        'fileuploadprocessstop'
                    ].join(' '), function (e, data) {
                        if (scope.$emit(e.type, data).defaultPrevented) {
                            e.preventDefault();
                        }
                    });
                }
            };
        }]);

    /**
     * 创建一个本地文件对象
     * @param sfile 服务器反回的 file 对象
     * @returns object
     * */
    function createAttachFile(sfile) {

        return {
            fileId    : sfile.id,
            fileName  : sfile.fileName,
            iconClass : getUploadIconClass(sfile.fileName)
        };
    }

    /**
     * 获取扩展名对应的图标样式
     * @param fileName 文件名
     * @returns {string} 扩展名对应的图标样式
     */
    function getUploadIconClass(fileName) {

        var extendName = fileName.substr(fileName.lastIndexOf('.'));

        if((/\.(jpe?g|png|gif|svg|bmp|tiff?)$/i).test(extendName)) {
            return 'fa-picture';
        }

        if((/\.(mpe?g|flv|mov|avi|swf|mp4|mkv|webm|wmv|3gp)$/i).test(extendName))
            return 'fa-film';

        if((/\.(mp3|ogg|wav|wma|amr|aac)$/i).test(extendName))
            return 'fa-music';

        return 'fa-file';
    }

});
