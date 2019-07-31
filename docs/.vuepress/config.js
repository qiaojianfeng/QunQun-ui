module.exports = {
  title: 'QunQun-UI',
  description: 'A Vue.js 2.0 UI Toolkit for Web',
  dest: 'docs/.vuepress/dist',
  port: 8888,
  themeConfig: {
    repo: 'https://github.com/webweifeng/QunQun-ui',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '指南', link: '/guide/install' },
      {
        text: '友情链接',
        items: [{ text: '蚂蚁号', link: 'https://www.v5ant.com' }, { text: '蚂蚁影院', link: 'https://www.imov.vip' }]
      },
      {
        text: 'Languages',
        items: [{ text: '中文', link: '/language/chinese/' }]
      },
      { text: 'Issues', link: 'https://github.com/webweifeng/QunQun-ui/issues' }
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false //是否展开
      },
      ['./guide/install/install', '安装'],
      ['./guide/started/started', '快速上手'],

      {
        title: '组件',
        collapsable: false
        // children: ['../../packages/alert/index/src/main.vue']
      }
    ],
    markdown: {
      // markdown 插入代码时展示对应行数
      lineNumbers: true
    }
  }
};
