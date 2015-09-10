'use strict';

var fs = require('fs');
var path = require('path')
var log = require('spm-log')
var Queue = require('dong-queue')

module.exports = function(options) {
  fs.exists('./config.json', function(exists) {
    if(exists) {

      var queue = new Queue()
      // 删除原有文件
      queue.use(require('./tasks/java-cleanup')())

      // 检出新文件
      queue.use(require('./tasks/java-checkout')())

      // 修改文件
      queue.use(require('./tasks/java-update')())

      queue.run(options, function(){
        log.info('java','已更新java部分')
      })

    }
    else {
      log.error('java','没有找到config.json文件')
      fs.writeFileSync('./config.json', fs.readFileSync(path.join(process.argv[1], '..','..','node_modules','dong-java','config.json')))
      log.info('java','已创建config.json示例文件')
      log.info('java','请根据项目需求修改config.json文件后重新运行dong java')
    }
  });
}
