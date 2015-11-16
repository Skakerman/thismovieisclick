module.exports = function (grunt) {
  var alias = require("browserify-alias-grunt");

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      build: {
        cwd: 'app',
        src: ['**', '!bower_components/**', '!**/*_test*'],
        dest: 'build',
        expand: true
      }
    },

    clean: {
      build: {
        src: ['build']
      }
    },

//    browserify: {
//      build: {
//        options: {
//          alias: alias.map(grunt, {
//
//            // alias all js files in the 'build' directory 
//            cwd: "build/",
//            src: ["**/*.js", "!**/*.min.js"],
//            dest: ""
//          })
//        },
//
//        src: "app/app.js",
//        dest: "build/app.js"
//      }
//    },

    uglify: {
      build: {
        options: {
          mangle: false,
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: [{
          expand: true,
          src: 'app/**/*.js',
          dest: 'build/'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('browserify-alias-grunt');

  // Default task(s).
  grunt.registerTask('default', ['clean:build', 'copy', 'uglify']);

};