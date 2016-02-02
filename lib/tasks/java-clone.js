'use strict'

var log = require('spm-log')
var Queue = require('dong-queue')
var shell = require('shelljs')

module.exports = function() {

  return function(options, next) {
    // clone only files
    // svn export --depth files REPOSITORY ../../../
    // svn export --depth files REPOSITORY/src/main/filters ../../../src/main/filters
    // svn export --depth files REPOSITORY/src/main/java ../../../src/main/java
    // svn export --depth files REPOSITORY/src/main/resources ../../../src/main/resources

    log.info('clone', 'pending')

    var cwd = process.cwd()

    var targets = [
      '/',
      '/src/test',
      '/src/main/filters',
      '/src/main/java',
      '/src/main/resources'
    ]

    var repository = options.repository || 'http://svn.sdp.nd/svn/admin-develop/branch'

    var queue = new Queue()

    queue.use(
      targets.map(function(target, index) {
        return function(next) {
          var cmd = [
            'cd',
            cwd,
            '&&',
            'svn export',
            '--depth',
            index ? 'infinity' : 'files',
            repository + target,
            '../../..' + target,
            '--force'
          ]

          var r = shell.exec(cmd.join(' '), {
            silent: !options.debug
          })

          if (r.code) {
            log.error('clone', r.output)
          } else {
            log.info('clone', target || '*.*')
            next()
          }
        }
      })
    )

    log.info('clone', 'from svn: ' + repository)

    queue.run(function() {
      log.info('clone', 'success')

      next()
    })
  }

}
