import type { NavItem } from '@vuepress/theme-default'
import type {NavGroup} from "@vuepress/theme-default/lib/shared/nav";
import {NavbarConfig} from "@vuepress/theme-default/lib/shared/nav";

const src_dir = '/blogs'

const nav = [
  {
    text: '前端',
    items: [{
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
    text: '计算机基础',
    items: [{
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
    items: [{
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
  {
    text: '常用解决方案', link: src_dir + '/Solution/FCP',
  }
]

export default nav