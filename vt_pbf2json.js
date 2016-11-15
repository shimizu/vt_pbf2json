var Pbf = require('pbf'),
    fs = require('fs'),
    concat = require('concat-stream'),
    vt = require('./node_modules/pbf/bench/vector_tile.js'),
    readTile = vt.Tile.read


var input = process.stdin.isTTY ? fs.createReadStream(process.argv[2]) : process.stdin;

input.pipe(concat(function(buf) {
    var tile = readTile(new Pbf(buf))
    console.log(JSON.stringify(tile, null, "\t"))
}))

