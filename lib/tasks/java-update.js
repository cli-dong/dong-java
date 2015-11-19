'use strict'

var fs = require('fs')
var path = require('path')

var log = require('spm-log')

module.exports = function() {

  return function(options, next) {
    var config = require(path.join(process.cwd(), 'config.json'))

    function handleReplace(items, content) {
      if (!items) {
        return content
      }

      Object.keys(items).forEach(function(key) {
        content = content.replace(items[key].from, items[key].to)
        log.info('update line', key)
      })

      return content
    }

    function handleDirect(items, content) {
      if (!items) {
        return content
      }

      Object.keys(items).forEach(function(key) {
        content = content.replace(new RegExp(key + '.*'), key + '=' + items[key])
        log.info('update line', key)
      })

      return content
    }

    Object.keys(config).forEach(function(key) {
      var item = config[key]
      var dest = path.join(item.path, item.name || key)

      var content = fs.readFileSync(dest, { encoding: 'utf-8' })

      log.info('update pending', key)

      content = handleReplace(item.replace, content)
      content = handleDirect(item.direct, content)

      fs.writeFileSync(dest, content)

      log.info('update success', key)
    })

    next()

  }

}
