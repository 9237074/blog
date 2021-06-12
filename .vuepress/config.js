const sidebar = require('./siderbar.js');
const src_dir = '/blogs'
console.log({sidebar})
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
      {
        text: '前端', ariaLabel: 'FrontEnd',
        items: [{
          text: 'Html', link: src_dir + '/FrontEnd/html/001'
        },{
          text: 'Css', link: src_dir + '/FrontEnd/css/001'
        },{
          text: 'Javascript', link: src_dir + '/FrontEnd/javascript/001'
        },{
          text: 'Vue', link: src_dir + '/FrontEnd/vue/001'
        }, {
          text: 'React', link: src_dir + '/FrontEnd/react/001'
        }]
      },
      { text: '计算机基础', ariaLabel: '',
        items: [{
          text: '数据结构', link: src_dir + '/ComputerBasics/DataStructure/001'
        },{
          text: '算法', link: src_dir + '/ComputerBasics/Algorethm/001'
        },{
          text: '网络协议', link: src_dir + '/ComputerBasics/webprotocal/001'
        }]
      },
      {
        text: '工程化', ariaLabel: 'Engineering',
        items: [{
          text: 'Git', link: src_dir + '/Engineering/git/001'
        }, {
          text: '模块化', link: src_dir + '/Engineering/module/001'
        },{
          text: 'Webpack', link: src_dir + '/Engineering/webpack/001webpack'
        },{
          text: '自动化构建', link: src_dir + '/Engineering/AutomatedConstruction/001'
        }]
      },
      { text: '英语', link: src_dir + '/English/' },
      { text: '杂文', link: src_dir + '/Blog/' }
    ],
    nextLinks: false,
    prevLinks: false
  },
  search: false
}