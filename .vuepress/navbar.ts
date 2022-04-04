const src_dir = '/blogs'

const navbar = [
  {
    text: '前端', ariaLabel: 'FrontEnd',
    children: [{
      text: 'Html', link: src_dir + '/FrontEnd/html/001'
    }, {
      text: 'Css', link: src_dir + '/FrontEnd/css/001'
    }, {
      text: 'Javascript', link: src_dir + '/FrontEnd/javascript/001'
    }, {
      text: 'Vue', link: src_dir + '/FrontEnd/vue/001'
    }, {
      text: 'React', link: src_dir + '/FrontEnd/react/001'
    },{
      text: '函数式编程', link: src_dir + '/FrontEnd/functional/001'
    }]
  },
  {
    text: '计算机基础', ariaLabel: '',
    children: [{
      text: '数据结构', link: src_dir + '/ComputerBasics/DataStructure/001'
    }, {
      text: '算法', link: src_dir + '/ComputerBasics/Algorethm/001'
    }, {
      text: '网络协议', link: src_dir + '/ComputerBasics/webprotocal/001'
    }]
  },
  {
    text: '工程化', ariaLabel: 'Engineering',
    children: [{
      text: 'Git', link: src_dir + '/Engineering/git/001'
    }, {
      text: '模块化', link: src_dir + '/Engineering/module/001'
    }, {
      text: 'Webpack', link: src_dir + '/Engineering/webpack/001'
    }, {
      text: '自动化构建', link: src_dir + '/Engineering/AutomatedConstruction/001'
    }]
  },
  { text: '英语', link: src_dir + '/English/' },
  { text: '杂文', link: src_dir + '/Blog/' }
]

export default navbar