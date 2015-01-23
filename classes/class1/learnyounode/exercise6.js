var filterFunction = require('./exercise6module.js');
var dirName = process.argv[2];
var extension = process.argv[3];

filterFunction(dirName, extension, function (err, data) {
  if (err) {
    return console.error('Error:',err);
  }
  data.forEach(function (file) {
    console.log(file)
  })
});
