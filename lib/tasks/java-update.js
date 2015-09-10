'use strict';

var fs = require('fs')
var path = require('path')

var log = require('spm-log')

module.exports = function() {
  return function(options, next) {

    var config = JSON.parse(fs.readFileSync('./config.json'))

    for (var key in config) {
      var filename = path.join(config[key]['path'], config[key]['name'] || key)
      var content = fs.readFileSync(filename, {
        encoding: 'utf-8'
      })

      for (var rep in config[key]['replace']) {
        var replacement = config[key]['replace'][rep]
        content = content.replace(replacement['from'], replacement['to']);
        fs.writeFileSync(filename, content)
        log.info('update', key + ' ' + rep)
      }

      for (var rep in config[key]['direct']) {
        var pattern = new RegExp(rep + '.*')
        var content = content.replace(pattern, rep + '=' + config[key]['direct'][rep])
        fs.writeFileSync(filename, content)
        log.info('update', key + ' ' + rep)
      }
    }

    next()
  }
}
