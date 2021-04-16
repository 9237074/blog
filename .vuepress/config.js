const sidebar = require('./siderbar.js');
const src_dir = '/blogs'
module.exports = {
  title: 'Cream 在努力💪',
  description: '让输出倒逼输入',
  head: [
    ['link', { rel: 'icon', href: src_dir + '/logo.png' }]
  ],
  base: '/blog/',
  themeConfig: {
    sidebar,
    nav: [
      { text: '前端', ariaLabel: 'vue',
        items: [{
          text: 'vue', link: src_dir + '/FrontEnd/vue/001'
        },{
          text: 'react', link: src_dir + '/FrontEnd/react/001'
        }]
      },
      { text: '计算机基础', link: src_dir + '/ComputerBasics/' },
      { text: 'webpack', link: src_dir + '/Notes/webpack/' },
      { text: '数据结构与算法', 
        ariaLabel: '数据结构与算法',
        items: [{
          text: '排序', link: src_dir + '/Algorithm/sort/'
        }] },
      { text: '英语', link: src_dir + '/English/' },
      { text: '杂文', link: src_dir + '/Blog/' }
    ],
    nextLinks: false,
    prevLinks: false
  },
  search: false
}