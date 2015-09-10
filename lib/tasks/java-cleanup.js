'use strict';

var log = require('spm-log')
var rimraf = require('rimraf')

module.exports = function() {
  return function(options, next) {
    log.info('java', '开始删除旧文件')

    rimraf('../java', function(err) {
      if (err) {
        log.error('java', '删除旧java文件夹错误 ' + err)
      } else {
        log.info('java', '已删除旧java文件夹')
      }

      rimraf('../filters', function(err) {
        if (err) {
          log.error('java', '删除旧filters文件夹错误 ' + err)
        } else {
          log.info('java', '已删除旧filters文件夹')
        }

        log.info('java', '已完成删除旧文件任务')
        
        next()
      });
    });
  }
}
