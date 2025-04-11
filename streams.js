const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', chunck => {
//     console.log('-------New Chunk--------')
//     console.log(chunck)
//     writeStream.write('\nNew chunk\n')
//     writeStream.write(chunck)
// })

//piping
readStream.pipe(writeStream)