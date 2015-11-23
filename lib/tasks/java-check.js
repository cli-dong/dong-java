'use strict'

var fs = require('fs')
var path = require('path')

var log = require('spm-log')

module.exports = function() {

  return function(options, next) {

    var dest = path.join(process.cwd(), 'config.json')

    if (fs.existsSync(dest)) {
      var config = require(dest)

      if (config.repository) {
        options.repository = config.repository
        delete config.repository
      }

      options.fileMap = config

      next()
    } else {
      log.error('check', 'connot find config.json')
      var dest2 = path.join(__dirname, '../assets/config.json')
      var template = fs.readFileSync(dest2, 'utf8')
      fs.writeFileSync(dest, template.replace('REPOSITORY', options.repository))
      log.info('done', 'created a sample config.json')
      log.info('todo', 'please edit config.json for your project and run me again')
    }

  }

}
