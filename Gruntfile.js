/*
  configure Grunt to lint, compile Sass, and watch for changes
 */

module.exports = function(grunt) {

    grunt.initConfig({
      browserify: {
        js: {
          src: ['app/app.js'],
          dest: 'dist/app.js'
        },
        options: {
          browserifyOptions: {
            paths: ['./node_modules']
          }
        }
      },
      jshint: {
        options: {
          predef: ['document', 'console', '$', '$scope', 'firebase'],
          esnext: true,
          debug: true,
          globalstrict: true,
          globals: {'angular': true, 'fabricmuch': true}
        },
        files: ['app/**/*.js']
      },
      sass: {
        dist: {
          files: {
            'app/styles/css/app.css': 'app/styles/sass/app.scss'
          }
        }
      },
      connect: {
        server: {
          options: {
            base: '../',
            hostname: 'localhost',
            port: 8080,
            livereload: true,
            open: true
          }
        }
      },
      watch: {
        options: {
          livereload: true
        },
        index: {
            files: [
              "app/**/*.html"
            ]
          },
        javascripts: {
          files: ['app/**/*.js'],
          tasks: ['jshint']
        },
        sass: {
          files: ['app/styles/sass/**/*.scss'],
          tasks: ['sass']
        }
      }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'watch']);
  };
