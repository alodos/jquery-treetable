module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({
    // This line makes your node configurations available for use
    pkg: grunt.file.readJSON('package.json'),

    // Compression
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %>\n'+
                ' * <%= pkg.homepage %>\n'+
                ' *\n'+
                ' * Copyright 2015,<%= pkg.author %>\n'+
                ' * License: <%= pkg.license %>\n'+
                ' */\n'
      },
      dist: {
        files: {
          'jquery.treetable.min.js': ['jquery.treetable.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['uglify']);
};


