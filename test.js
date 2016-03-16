var fs = require('fs')
var rabin = require('.')()

// pipe some data in
var rs = fs.createReadStream('somefile.dat')
rs.pipe(rabin)

// handle output chunks
rabin.on('data', function (chunk) {
  // chunks are created by taking your input data
  // and splitting on each rabin fingerprint found
})
