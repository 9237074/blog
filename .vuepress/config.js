const sidebar = require('./siderbar.js');
console.log(sidebar)
module.exports = {
  title: 'Cream 在努力💪',
  description: '让输出倒逼输入',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  base: '/',
  themeConfig: {
    sidebar,
    nav: [
      { text: '前端', ariaLabel: 'vue',
        items: [{
          text: 'vue', link: 'blogs/FrontEnd/vue/001'
        }]
      },
      { text: '计算机基础', link: '/ComputerBasics/' },
      { text: 'webpack', link: '/Notes/webpack/' },
      { text: '数据结构与算法', 
        ariaLabel: '数据结构与算法',
        items: [{
          text: '排序', link: '/Algorithm/sort/'
        }] },
      { text: '英语', link: '/English/' },
      { text: '杂文', link: '/Blog/' }
    ],
    nextLinks: false,
    prevLinks: false
  },
  search: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/docs'
      }
    }
  }
}