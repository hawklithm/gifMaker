const fs = require('fs');
const zlib = require('zlib');
const gifConst = require('./const');

class GIF {
  constructor() {
    this.encoding = 'utf8'
    this.initData()
  }
  initData() {
    this.bufferFragments = []
    fs.writeFile('./gif.gif', Buffer.concat([
      Buffer.from(gifConst.GIF_SIGNATURE),
      Buffer.from(gifConst.LSD),
      Buffer.from(gifConst.GCT),

      Buffer.from(gifConst.FUCK),
      Buffer.from(gifConst.ID),
      Buffer.from(gifConst.IMAGEDATA),

      Buffer.from(gifConst.FUCK2),
      Buffer.from(gifConst.ID),
      Buffer.from(gifConst.FUCK4),

      Buffer.from(gifConst.END)
    ]), (res) => {
      console.log(res);
    })
  }
}


module.exports = GIF