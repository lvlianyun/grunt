'use strict'

module.exports=function(grunt){

    grunt.initConfig({
        transport:{
            options:{
                debug:false
            },
            common:{
                files:[{
                    expand:true,
                    cwd:'../',
                    src:'common/**/*.js',
                    dest:'transport',
                    ext: '.js'
                }]
            },
            biz:{
                 files:[{
                     expand:true,
                     cwd:'../',
                     src:'main/**/*.js',
                     dest:'transport',
                     ext: '.js'
               }]

            }
        },
        concat:{
            options:{
                separator:';'
            },
            common:{
                src:'transport/common/**/*.js',
                dest:'concat/common/common-all.js',
            },
            main:{
                files:{
                    'concat/main/run.js':['transport/main/**/*.js']
                }
            }
        },
        uglify:{
            common:{
                src:'concat/common/common-all.js',
                dest:'dist/common/common-all.js'
            },
            main: {
                files: [{
                    'dist/main/run.js': ['concat/main/run.js']
                }, {
                    src: '../common/config.js',
                    dest: 'dist/common/config.js'
                },{
                    src: '../css/**/*.css',
                    dest: 'dist/'
                }]
            }
        },
        imagemin:{
            dist:{
                options: {
                    optimizationLevel: 3 //定义 PNG 图片优化水平
                },files:{
                    expand: true,
                    src:['../images/**/*.png'],
                    dest:'dist/'
                }

            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        src: ['../assets/**/*.js'],
                        dest: 'dist/assets',
                        ext: '.js'


                    }, {
                        expand: true,
                        cwd: '../',
                        src: '*.html',
                        dest: 'dist/',
                        ext: '.html'
                    }
                    , {

                        src: '../node.run.js',
                        dest: 'dist/node.run.js'
                    }
                ]
            }
        },

        clean:{
            start:{
                src: ['transport','concat','dist']
            },
            done:{
                src: ['transport','concat']
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['clean:start', 'transport', 'concat', 'uglify', 'copy', 'clean:done']);

}