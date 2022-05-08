fs = require('fs');

data = fs.readdirSync('/home/luis/Linux/cursoNode');
console.log('data:', data);

console.log("this comes after");