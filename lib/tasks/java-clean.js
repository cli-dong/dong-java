'use strict'

var fs = require('fs')
var path = require('path')

var log = require('spm-log')
var Queue = require('dong-queue')
var rimraf = require('rimraf')

module.exports = function() {

  return function(options, next) {

    log.info('clean', 'pending')

    var targets = [
      '../../../',
      '../filters',
      '../java',
      '../resources'
    ]

    var queue = new Queue()

    var basePath = path.join(process.cwd(), targets.shift())

    fs.readdirSync(basePath)
    .forEach(function(file) {
      var target = path.join(basePath, file)
      if (fs.statSync(target).isFile()) {
        queue.use(function(next) {
          rimraf(target, function(err) {
            if (err) {
              log.error('clean', target)
            } else {
              log.info('clean', target)
              next()
            }
          })
        })
      }
    })

    queue.use(
      targets.map(function(target) {
        return function(next) {
          rimraf(target, function(err) {
            if (err) {
              log.error('clean', target)
            } else {
              log.info('clean', target)
              next()
            }
          })
        }
      })
    )

    queue.all(function() {
      log.info('clean', 'success')

      next()
    })

  }

}
