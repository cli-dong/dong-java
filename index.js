/*
 * dong-java
 * https://github.com/crossjs/dong-java
 *
 * Copyright (c) 2015 crossjs
 * Licensed under the MIT license.
 */

'use strict';

module.exports = {
  command: 'java',
  description: '生成 API 文档',
  options: [{
    name: 'repository',
    alias: 'r',
    description: '同步源 SVN 地址',
    defaults: ''
  }, {
    name: 'debug',
    alias: 'd',
    description: '显示调试信息',
    defaults: false
  }],
  bootstrap: require('./lib/java'),
  strict: true
}
