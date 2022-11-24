const URL = process.argv[2];
const path = process.argv[3];
const fs = require('fs');
const request = require('request');

request(URL, function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  fs.writeFile(`${path}`, URL, err => {
    if (err) {
      console.error(err);
    }
    fs.stat(`${path}`, (err, fileStats) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Downloaded and saved ${fileStats.size} bytes to ${path}`)
      }
    })
  });
});
