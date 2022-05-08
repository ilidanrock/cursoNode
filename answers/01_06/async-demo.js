fs = require('fs');

function phoneNumber(err, data) {
	console.log('data:', data);
}

fs.readdir('/home/luis/Linux/cursoNode', phoneNumber);

console.log("this comes after");