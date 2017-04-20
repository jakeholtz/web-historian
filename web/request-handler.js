var path = require('path');
var archive = require('../helpers/archive-helpers');
var paths = archive.paths;
var fs = require('fs');
var test;
var httpHelpers = require('./http-helpers');
var headers = httpHelpers.headers;
// require more modules/folders here!

exports.handlereq = function (req, res) {
  if (req.method === 'GET') {
    fs.readFile(path.join(paths.siteAssets, '/index.html'), function (err, data) {
      
      if (err) {
        return console.error(err);
      }

      console.log('Asynchronous read: ' + data.toString());
      res.writeHead(200, headers);
      req.on('data', function(chunk) {
        data += chunk;
      });

      req.on('end', function() {
        res.end(data);
      });

    });
  }
  //res.end(archive.paths.list);
};
