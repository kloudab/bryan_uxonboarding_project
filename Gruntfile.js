module.exports = function(grunt) {
	var paths = {
		public: 'dist/',
		private: 'src/assets/',
		node: 'node_modules/',
		temp: 'temp/'
	};
	var files = {
		js: [
			'<%= paths.private %>scripts/**/*.js',
			'<%= paths.temp %>js/templates.js'
		],
		css: [
			'<%= paths.private %>css/*.css'
		],
		gifs: [
			'<%= paths.private %>gifs/*'
		],
		deps: {
			js: [
				'<%= paths.node %>angular/angular.min.js',
				'<%= paths.node %>angular-resource/angular-resource.min.js',
				'<%= paths.node %>angular-ui-router/release/angular-ui-router.min.js'
			]
		}
	};
	grunt.initConfig({
		paths: paths,
		pkg: grunt.file.readJSON('package.json'),
		clean: ['<%= paths.public %>', '<%= paths.temp %>'],
		copy: {
			main: {
				files: [
					{
						expand: true,
						flatten: true,
						src: files.css,
						dest: '<%= paths.public %>css',
					},{
						expand: true,
						flatten: true,
						src: files.gifs,
						dest: '<%= paths.public %>gifs',
					},{
						expand: true,
						flatten: true,
						src: './src/index.html',
						dest: '<%= paths.public %>'
					}
				]
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: paths.public
				}
			},
			testserver: {
				options: {
					port: 9876
				}
			}
		},
		ngtemplates: {
			main: {
				options: {
					bootstrap: function(module,script) {
						return 'UserProfileApp.run([\'$templateCache\', function($templateCache) {\n' + script + '}]);\n';
					}
				},
				files: [
					{
						cwd: '<%= paths.private %>',
						src: 'partials/*.html',
						dest: '<%= paths.temp %>js/templates.js'
					}
				]
			}
		},
		concat: {
			main: {
				files: [
					{
						src: files.deps.js.concat(files.js),
						dest: '<%= paths.public %>js/application.js'
					}
				]
			}
		},
		watch: {
			js: {
				files: files.js,
				tasks: ['concat']
			},
			others: {
				files: files.css.concat(files.gifs),
				tasks: ['copy']
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			js: {
				src: ['<%= paths.public %>js/application.js'],
				dest: '<%= paths.public %>js/application.js'
			}
		},
		karma: {
			e2e: {
				configFile: './test/karma-e2e.conf.js',
				autoWatch: false,
				singleRun: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('dev', ['clean', 'ngtemplates', 'concat', 'copy', 'connect', 'watch']);
	grunt.registerTask('dist', ['clean', 'ngtemplates', 'concat', 'copy', 'uglify']);

	grunt.registerTask('test', ['connect:testserver', 'karma:e2e']);
};