module.exports = function (grunt) {
  var alias = require("browserify-alias-grunt");

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**/*']
    },

    copy: {
      build: {
        cwd: 'app',
        src: ['**', '!**/*_test*'],
        dest: 'build',
        expand: true
      }
    },

    clean: {
      build: {
        src: ['build']
      }
    },

    uglify: {
      build: {
        options: {
          mangle: false,
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        files: {
          'build/app.min.js': ['build/**/*.js']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task(s).
  grunt.registerTask('default', ['clean:build', 'copy']);

};
