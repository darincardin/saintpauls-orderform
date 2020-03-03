module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.config.init({
		clean: {dist:'dist', tmp:'.tmp'},
		useminPrepare: {  html: 'src/index.html', admin: 'src/admin.html', login: 'src/login.html',options: { dest: 'dist' }},
		usemin:{ html:['dist/index.html'], admin:['dist/admin.html'], login:['dist/login.html'] },
		copy:{ 
			html: {cwd: './src/', src: '*.html', dest: 'dist/' ,  expand: true  },
			images: {cwd: './src/assets/images', src: '**', dest: 'dist/assets/images',  expand: true  },
			fonts: {cwd: './src/assets/fonts', src: '**', dest: 'dist/assets/fonts',  expand: true  },
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
		'copy:images',
		'copy:fonts',
		'copy:favicon',
		'clean:tmp'
    ]);
}