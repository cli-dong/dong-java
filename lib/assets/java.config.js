module.exports = {

  // 同步源 SVN 地址
  // [默认] 从最新开发代码复制：http://svn.sdp.nd/svn/admin-develop/branch
  // [建议] 从 tags 复制，e.g.：http://svn.sdp.nd/svn/admin-develop/tags/1.1.0
  // p.s. 留空则从默认源复制。
  repository: 'REPOSITORY',

  conditions: [

    {
      path: '../../../.project',
      rules: [
        {
          from: /admin\-develop/g,
          to: 'PLACEHOLDER'
        }
      ]
    },

    {
      path: '../../../pom.xml',
      rules: [
        {
          from: /admin_develop/g,
          to: 'PLACEHOLDER'
        }
      ]
    },

    {
      path: '../java/com/nd/admin/app/WebApplication.java',
      rules: [
        {
          from: /admin\-develop\.sdp\.nd/g,
          // e.g. microblog-admin.sdp.nd
          to: 'PLACEHOLDER'
        }
      ]
    },

    {
      // 开发环境
      path: '../filters/filter-development.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /mongodb\.dbName.*/g,
          // from sdp
          to: 'mongodb.dbName = PLACEHOLDER'
        },
        {
          from: /mongodb\.username.*/g,
          // from sdp
          to: 'mongodb.username = PLACEHOLDER'
        },
        {
          from: /mongodb\.password.*/g,
          // from sdp
          to: 'mongodb.password = PLACEHOLDER'
        },
        {
          from: /admin\.target\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.target.uri = PLACEHOLDER'
        },
        {
          from: /admin\.self\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.self.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 预生产环境
      path: '../filters/filter-preproduction.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /mongodb\.dbName.*/g,
          // from sdp
          to: 'mongodb.dbName = PLACEHOLDER'
        },
        {
          from: /mongodb\.username.*/g,
          // from sdp
          to: 'mongodb.username = PLACEHOLDER'
        },
        {
          from: /mongodb\.password.*/g,
          // from sdp
          to: 'mongodb.password = PLACEHOLDER'
        },
        {
          from: /admin\.target\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.target.uri = PLACEHOLDER'
        },
        {
          from: /admin\.self\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.self.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 压测环境
      path: '../filters/filter-pressure.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /mongodb\.dbName.*/g,
          // from sdp
          to: 'mongodb.dbName = PLACEHOLDER'
        },
        {
          from: /mongodb\.username.*/g,
          // from sdp
          to: 'mongodb.username = PLACEHOLDER'
        },
        {
          from: /mongodb\.password.*/g,
          // from sdp
          to: 'mongodb.password = PLACEHOLDER'
        },
        {
          from: /admin\.target\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.target.uri = PLACEHOLDER'
        },
        {
          from: /admin\.self\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.self.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 生产环境
      path: '../filters/filter-product.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /mongodb\.dbName.*/g,
          // from sdp
          to: 'mongodb.dbName = PLACEHOLDER'
        },
        {
          from: /mongodb\.username.*/g,
          // from sdp
          to: 'mongodb.username = PLACEHOLDER'
        },
        {
          from: /mongodb\.password.*/g,
          // from sdp
          to: 'mongodb.password = PLACEHOLDER'
        },
        {
          from: /admin\.target\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.target.uri = PLACEHOLDER'
        },
        {
          from: /admin\.self\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.self.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 测试环境
      path: '../filters/filter-test.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /mongodb\.dbName.*/g,
          // from sdp
          to: 'mongodb.dbName = PLACEHOLDER'
        },
        {
          from: /mongodb\.username.*/g,
          // from sdp
          to: 'mongodb.username = PLACEHOLDER'
        },
        {
          from: /mongodb\.password.*/g,
          // from sdp
          to: 'mongodb.password = PLACEHOLDER'
        },
        {
          from: /admin\.target\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.target.uri = PLACEHOLDER'
        },
        {
          from: /admin\.self\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.self.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // AWS 环境
      path: '../filters/filter-aws.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /mongodb\.dbName.*/g,
          // from sdp
          to: 'mongodb.dbName = PLACEHOLDER'
        },
        {
          from: /mongodb\.username.*/g,
          // from sdp
          to: 'mongodb.username = PLACEHOLDER'
        },
        {
          from: /mongodb\.password.*/g,
          // from sdp
          to: 'mongodb.password = PLACEHOLDER'
        },
        {
          from: /admin\.target\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.target.uri = PLACEHOLDER'
        },
        {
          from: /admin\.self\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.self.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 党员 E 家 环境
      path: '../filters/filter-party.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /mongodb\.dbName.*/g,
          // from sdp
          to: 'mongodb.dbName = PLACEHOLDER'
        },
        {
          from: /mongodb\.username.*/g,
          // from sdp
          to: 'mongodb.username = PLACEHOLDER'
        },
        {
          from: /mongodb\.password.*/g,
          // from sdp
          to: 'mongodb.password = PLACEHOLDER'
        },
        {
          from: /admin\.target\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.target.uri = PLACEHOLDER'
        },
        {
          from: /admin\.self\.uri.*/g,
          // format: PROTOCOL//HOST/VERSION/
          to: 'admin.self.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 开发环境内容服务
      path: '../filters/resources/development/contentService.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /contents\.id.*/g,
          // from sdp
          to: 'contents.id = PLACEHOLDER'
        },
        {
          from: /contents\.path.*/g,
          // from sdp
          to: 'contents.path = PLACEHOLDER'
        },
        {
          from: /contents\.uri.*/g,
          // from sdp
          to: 'contents.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 预生产环境内容服务
      path: '../filters/resources/preproduction/contentService.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /contents\.id.*/g,
          // from sdp
          to: 'contents.id = PLACEHOLDER'
        },
        {
          from: /contents\.path.*/g,
          // from sdp
          to: 'contents.path = PLACEHOLDER'
        },
        {
          from: /contents\.uri.*/g,
          // from sdp
          to: 'contents.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 压测环境内容服务
      path: '../filters/resources/pressure/contentService.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /contents\.id.*/g,
          // from sdp
          to: 'contents.id = PLACEHOLDER'
        },
        {
          from: /contents\.path.*/g,
          // from sdp
          to: 'contents.path = PLACEHOLDER'
        },
        {
          from: /contents\.uri.*/g,
          // from sdp
          to: 'contents.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 生产环境内容服务
      path: '../filters/resources/product/contentService.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /contents\.id.*/g,
          // from sdp
          to: 'contents.id = PLACEHOLDER'
        },
        {
          from: /contents\.path.*/g,
          // from sdp
          to: 'contents.path = PLACEHOLDER'
        },
        {
          from: /contents\.uri.*/g,
          // from sdp
          to: 'contents.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 测试环境内容服务
      path: '../filters/resources/test/contentService.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /contents\.id.*/g,
          // from sdp
          to: 'contents.id = PLACEHOLDER'
        },
        {
          from: /contents\.path.*/g,
          // from sdp
          to: 'contents.path = PLACEHOLDER'
        },
        {
          from: /contents\.uri.*/g,
          // from sdp
          to: 'contents.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // AWS 环境内容服务
      path: '../filters/resources/aws/contentService.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /contents\.id.*/g,
          // from sdp
          to: 'contents.id = PLACEHOLDER'
        },
        {
          from: /contents\.path.*/g,
          // from sdp
          to: 'contents.path = PLACEHOLDER'
        },
        {
          from: /contents\.uri.*/g,
          // from sdp
          to: 'contents.uri = PLACEHOLDER'
        }
      ]
    },

    {
      // 党员 E 家 环境内容服务
      path: '../filters/resources/party/contentService.properties',
      // 匹配模式为匹配到行尾
      rules: [
        {
          from: /contents\.id.*/g,
          // from sdp
          to: 'contents.id = PLACEHOLDER'
        },
        {
          from: /contents\.path.*/g,
          // from sdp
          to: 'contents.path = PLACEHOLDER'
        },
        {
          from: /contents\.uri.*/g,
          // from sdp
          to: 'contents.uri = PLACEHOLDER'
        }
      ]
    }

  ]
}
