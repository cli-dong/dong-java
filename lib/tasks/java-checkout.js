'use strict';

var path = require('path')
var spawnSync = require('child_process').spawnSync
var log = require('spm-log')

module.exports = function() {
  return function(options, next) {

    log.info('java', '开始检出svn文件')
    var childJava = spawnSync('svn', ['export', 'http://svn.sdp.nd/svn/admin-develop/branch/src/main/java/', path.resolve(process.cwd(), '../java'), '--username', '901010'])
    var childFilters = spawnSync('svn', ['export', 'http://svn.sdp.nd/svn/admin-develop/branch/src/main/filters/', path.resolve(process.cwd(), '../filters'), '--username', '901010'])
    var outputJava = childJava.stdout.toString().split('\r\n')
    var outputFilters = childFilters.stdout.toString().split('\r\n')
    outputJava.forEach(function(line) {
      if (line) {
        log.info('svn', line)
      }
    });
    outputFilters.forEach(function(line) {
      if (line) {
        log.info('svn', line)
      }
    });
    log.info('java', '检出svn文件完成')
    next()
  }
}
