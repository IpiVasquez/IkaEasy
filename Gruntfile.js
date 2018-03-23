module.exports = function(grunt) {

    grunt.initConfig({
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/css/ikaeasy.css': [
                        'src/css/ikaeasy.css',
                        //'src/css/ikalogs.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true,
                    hoist_funs: false
                },
                //sourceMap: true
            },
            my_target: {
                files: {
                    'dist/inner/ikaeasy.js': ['src/inner/ikaeasy.js'],
                    'dist/inner/background.min.js': ['src/inner/background.js'],
                    //'dist/jquery.min.js': ['src/jquery.min.js'],
                    'dist/app.min.js': [
                        'src/vendor/moment.js',
                        'src/jquery.min.js',
                        'src/vendor/jquery.countdown.min.js',
                        'src/langs/*.js',
                        "src/zJS/utils.js",
                        "src/zJS/lng.js",
                        "src/zJS/var.js",
                        "src/zJS/db.js",
                        "src/init.js",
                        "src/ikalogs.js",
                        'src/page/*.js',
                        "src/hotkeysPlugin.js",
                        "src/page/sendIKMessage.js",
                        "src/zJS/navigation.js",
                    ]
                }
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    //{expand: true, src: ['src/icon/*'], dest: 'dist/icon/', filter: 'isFile'},

                    // includes files within path and its sub-directories
                    //{expand: true, src: ['src/icon/**'], dest: 'dist/icon/'},

                    //// makes all src relative to cwd
                    {expand: true, cwd: 'src/icon/', src: ['**'], dest: 'dist/icon/'},
                    {expand: true, cwd: 'src/images/', src: ['**'], dest: 'dist/images/'},
                    //
                    //// flattens results to a single level
                    //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
                ]
            }
        },
        jshint: {
            //ignore_warning: {
            //    options: {
            //        '-W015': true,
            //    },
            //    src: ['src/**/*.js']
            //}
            all: ['Gruntfile.js', 'src/**/*.js', '!src/jquery.min.js']
        }
        //watch: {
        //    files: ['<%= jshint.files %>'],
        //    tasks: ['jshint']
        //}
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['cssmin', 'uglify', 'copy']);

};