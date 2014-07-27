'use strict'

module.exports = function (grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        banner : '/* !<%= pkg.name %> - v<%= pkg.version %> -' + 
                 '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                 '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author_name %>;' +
                 ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        // reslove deps
        transport : {
            options : {
                alias : {
                    'jquery' : 'lib/js/jquery.js'       
                }         
            },
            src : {
                options : {
                    'idleading' : '<%= pkg.name %>/'          
                },
                files : [{
                    'src' : ['mod/**/*.js','util/**/*.js','page/**/*.js'],
                    'dest' : './../.sea-debug/<%= pkg.name %>/'                           
                }]
            }
            
        },
        // concat files
        // please write the files by yourself
        concat : {
            src: {
                options : {
                    'include': 'relative',
                    'banner': '<%= banner %>'
                },
                files: {
                    // write by yourself
                    // example like this
                    // './../dist/<%= pkg.name %>/page/js/main.js' : ['./../.sea-debug/<%= pkg.name %>/js/main.js'],
                }
            }
        },
        // copy images
        copy : {
            'css' : {
                'file' : {
                    'expand': true,
                    'cwd':'./',
                    'src': ['css/**'],
                    'dest': './../dist/<%= pkg.name %>/'
                }
            },
            'image' : {
                'file' : {
                    'expand': true,
                    'cwd': './',
                    'src': ['image/**','img/**'],
                    'dest': './../dist/<%= pkg.name %>/' 
                }
            } 
        },
        // stylus
        stylus : {
            'all-release' : {
                'options' : {
                    // auto import var.styl & mixin.styl
                    'paths' : ['./../libs/stylus'],
                    'import':[
                        'var.styl',
                        'mixin.styl'
                    ]
                },
                'files' : {
                    // write path by yourself
                    // example like this
                    // './../dist/<%= pkg.name%>/button/button.css' : './../<%= pkg.name %>/util/button/button.styl'
                }
            }
        },
        uglify : {
            options : {
                'compress': {
                    'drop_console': true
                }
            },
            js : {
                files:[{
                    'expand': true,
                    'cwd': './../dist/<%= pkg.name %>',
                    'src': '**/*.js',
                    'dest': './../dist/<%= pkg.name %>' 
                }]
            }
        },
        clean : {
            
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['stylus','transport','concat','copy']);
    grunt.registerTask('release',['transport','concat','copy','uglify']);
}
