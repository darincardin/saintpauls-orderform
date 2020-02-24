module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.config.init({
		clean: {dist:'dist', tmp:'.tmp'},
		useminPrepare: {  html: 'src/index.html',options: { dest: 'dist' }},
		usemin:{html:['dist/index.html']  },
		copy:{ 
		
		
			html: {src: './src/index.html', dest: 'dist/index.html' },
			images: {cwd: './src/assets/images', src: '*', dest: 'dist/assets/images',  expand: true },
			fonts: {cwd: './src/assets/fonts', src: '*', dest: 'dist/assets/fonts',  expand: true  }
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
		'clean:tmp'
    ]);
}