'use strict'

var fs = require('fs')
var path = require('path')

var log = require('spm-log')

module.exports = function() {

  return function(options, next) {

    var dest = path.join(process.cwd(), 'config.json')

    if (fs.existsSync(dest)) {
      next()
    } else {
      log.error('check', 'connot find config.json')
      fs.writeFileSync(dest, fs.readFileSync(path.join(__dirname, '../assets/config.json')))
      log.info('done', 'created a sample config.json')
      log.info('todo', 'please edit config.json for your project and run me again')
    }

  }

}
