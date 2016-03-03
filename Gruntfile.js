'use strict'

module.exports=function(grunt){

    var config={
        app:'main',
        dist:'dist',
        transport:'transport'
    }
    grunt.initConfig({
        config:config,

        copy:{
            dist:{
                expand:true,
                src:'<%=config.app%>/**/*.js',
                dest:'<%=config.dist%>'
            }
        },
        transport:{
            options:{
                debug:false
            },
            main:{
                files:[{
                    expand:true,
                    src:'<%=config.app%>/**/*.js',
                    dest:'<%=config.transport%>'
                }]
            }
        },
        concat:{
           main:{
               files:{
                   '<%=config.app%>/run.temp.js':['<%=config.app%>/**/*.js']
               }
           }
        },
        clean:{
            dist:{
                src: '<%=config.transport%>'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-cmd-transport');
}