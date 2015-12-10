'use strict'

var fs = require('fs')
var path = require('path')

var log = require('spm-log')

module.exports = function() {

  return function(options, next) {
    var conditions = options.conditions

    function handleReplace(rules, content) {
      if (!rules || !rules.length) {
        return content
      }

      rules.forEach(function(rule) {
        content = content.replace(rule.from, rule.to)
        log.info('update rule', rule.from.source)
      })

      return content
    }

    conditions.forEach(function(item) {
      var content = fs.readFileSync(item.path, { encoding: 'utf-8' })

      log.info('update pending', item.path)

      content = handleReplace(item.rules, content)

      fs.writeFileSync(item.path, content)

      log.info('update success', item.path)
    })

    next()

  }

}
