module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        backstop: {
            setup: {
                options: {
                    backstop_path: './bower_components/BackstopJS',
                    test_path: './tests',
                    setup: false,
                    configure: true
                }
            },
            test: {
                options: {
                    backstop_path: './bower_components/BackstopJS',
                    test_path: './tests',
                    create_references: false,
                    run_tests: true
                }
            },
            reference: {
                options: {
                    backstop_path: './bower_components/BackstopJS',
                    test_path: './tests',
                    create_references: true,
                    run_tests: false
                }
            }
        }
    });
    // Load the plugin that provides the "backstop" task.
    grunt.loadNpmTasks('grunt-backstop');
};


