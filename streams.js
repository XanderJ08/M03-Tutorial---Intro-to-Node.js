const fs = require ('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//readStream.on('data', (chunk) => {
  //console.log('___new chunk____')
  //console.log(chunk);
  //writeStream.write('\nNEW CHUNK\n');
  //writeStream.write(chunk);
//});

readStream.pipe()