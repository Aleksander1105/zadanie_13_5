var OSinfo = require('./modules/OSXinfo.js');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if(input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/version':
				console.log(process.versions);
				break;
			case '/env':
				process.stdout.write('Process language is as following: ' + process.env.LANG + ' \n');
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		} 
	}
	 
})

