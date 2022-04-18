const src_dir = '/blogs'

const navbar = [
  {
    text: '前端', ariaLabel: 'FrontEnd',
    children: [{
      text: 'HTML', link: src_dir + '/FrontEnd/html/001'
    }, {
      text: 'CSS', link: src_dir + '/FrontEnd/css/001'
    }, {
      text: 'JavaScript', link: src_dir + '/FrontEnd/javascript/001'
    }, {
      text: 'Vue', link: src_dir + '/FrontEnd/vue/001'
    }, {
      text: 'React', link: src_dir + '/FrontEnd/react/001'
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
    text: 'Node.js', link: src_dir + '/Nodejs/Advanced'
  },
  {
    text: "核心框架原理",
    children: [{
      text: 'Vue',
      link: src_dir + '/FrontEnd/CoreFramework/Vue/Principle'
    }, {
      text: 'React',
      link: src_dir + '/FrontEnd/CoreFramework/React/Advanced'
    }]
  },
  {
    text: '工程化', link: src_dir + '/Engineering/module',
  },
  // { text: '英语', link: src_dir + '/English/' },
  // { text: '杂文', link: src_dir + '/Blog/' }
]

export default navbar