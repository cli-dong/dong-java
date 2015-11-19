'use strict';

var log = require('spm-log')
var Queue = require('dong-queue')

module.exports = function(options) {
  var queue = new Queue()

  // 检查环境
  queue.use(require('./tasks/java-check')())

  // 清理目录
  queue.use(require('./tasks/java-clean')())

  // 拉取代码
  queue.use(require('./tasks/java-clone')())

  // 替换字段
  queue.use(require('./tasks/java-update')())

  log.info('java', '开始更新处理')

  queue.run(options, function() {
    log.info('java', '完成更新处理')
  })
}
