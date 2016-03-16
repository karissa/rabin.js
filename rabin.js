module.exports = Rabin

function Rabin () {
  this.instance_counter = 0
}

function get_fingerprints (hasher, bufs, lengths) {
  var chunk_idx = 0
  for (var i = 0; i < bufs.length; i++) {
    var buf = bufs[i]
    var len = buf.length
    while (true) {
      var remaining = next_chunk(bufs, buf, len)
      if (remaining < 0) break;
      len += remaining
      chunk_idx += 1
    }
  }
}

Rabin.prototype.fingerprint = function (bufs, lengths) {
}

Rabin.prototype.initialize = function (avgBits, min, max) {



}

Rabin.prototype.end = function () {

}
