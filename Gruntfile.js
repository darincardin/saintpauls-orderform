module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.config.init({
		clean: {dist:'dist', tmp:'.tmp'},
		useminPrepare: {  html: 'src/index.html', admin: 'src/admin.html', options: { dest: 'dist' }},
		usemin:{html:['dist/index.html'], admin:['dist/admin.html']   },
		copy:{ 
			html: {cwd: './src/', src: '*.html', dest: 'dist/' ,  expand: true  },
			assets: {cwd: './src/assets/', src: '**', dest: 'dist/assets/',  expand: true  },
			data: {cwd: './data', src: '*', dest: 'dist/data',  expand: true  },
			favicon: {src: './src/favicon.ico', dest: 'dist/favicon.ico' }
		}
	});

	grunt.registerTask('default',[
		'clean:dist',
		'copy:html',

		'useminPrepare',
		'concat',
		'uglify',
		'cssmin',
		'usemin',
		'copy:assets',
		'copy:data',
		'copy:favicon',
		
		'clean:tmp'
    ]);
}