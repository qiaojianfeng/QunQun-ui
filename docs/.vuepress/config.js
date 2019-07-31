const path = require('path');
module.exports = {
  title: 'QunQun-UI',
  description: 'A Vue.js 2.0 UI Toolkit for Web',
  dest: 'docs/.vuepress/dist',
  palette: path.resolve(__dirname, 'palette.styl'),
  base: '/QunQun-ui/',
  port: 8888,
  head: [['link', { rel: 'icon', href: `/qun.png` }]],
  themeConfig: {
    repo: 'https://github.com/webweifeng/QunQun-ui',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '指南', link: '/guide/started/started' },
      {
        text: '友情链接',
        items: [{ text: '蚂蚁号', link: 'https://www.v5ant.com' }, { text: '蚂蚁影院', link: 'https://www.imov.vip' }]
      },
      {
        text: 'Languages',
        items: [{ text: '中文', link: 'https://webweifeng.github.io/QunQun-ui/' }]
      },
      { text: 'Issues', link: 'https://github.com/webweifeng/QunQun-ui/issues' }
    ],
    sidebar: [
      {
        title: '️️✈️ 开发指南',
        collapsable: false //是否展开
      },
      ['./guide/started/started', '快速上手'],
      {
        title: '🍪 组件',
        collapsable: false
      },
      ['../guide/components/alert/alert', 'Alert']
    ],
    markdown: {
      // markdown 插入代码时展示对应行数
      lineNumbers: true
    }
  }
};
