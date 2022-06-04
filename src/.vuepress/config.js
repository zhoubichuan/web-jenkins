module.exports = {
  // 基础配置
  base: '/web-jenkins/', // 部署站点的基础路径
  description: 'Jenkins相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'Jenkins学习笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: 'Jenkins入门',
          items: [{
            text: '一.jenkins基础',
            link: '/base/practice/1.Jenkins'
          }
          ]
        },
        {
          text: 'Jenkins高级用法',
          items: [{
            text: '一.Jenkins精讲',
            link: '/senior/use/1.index'
          },
          ]
        }
        ],
        sidebar: {
          '/base/practice/': [
            '1.Jenkins', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/senior/use/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
        }
      }
    }
  },
}