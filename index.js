/*
 * dong-java
 * https://github.com/aoiuym/dong-java
 *
 * Copyright (c) 2015 aoiuym
 * Licensed under the ISC license.
 */

'use strict';

module.exports = {
  command: 'java',
  description: '更新java部分',
  // options: [],
  bootstrap: require('./lib/latest-java')
}
