//....................Input......................
const fs = require('fs');
const read = function () {
  fs.writeSync(1, String());
  let s = '';
  let buf = Buffer.alloc(1);
  while (buf[0] - 10 && buf[0] - 13)
    s += buf, fs.readSync(0, buf, 0, 1, 0);
  return s.slice(1);
};
module.exports = read;
//...............................................

