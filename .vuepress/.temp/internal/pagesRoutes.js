import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-76fdf177","/blogs/",{"title":""},["/blogs/index.html","/blogs/README.md"]],
  ["v-6df63596","/blogs/Blog/",{"title":"比克"},["/blogs/Blog/index.html","/blogs/Blog/index.md"]],
  ["v-69a34cb8","/blogs/ComputerBasics/",{"title":"计算机基础"},["/blogs/ComputerBasics/index.html","/blogs/ComputerBasics/index.md"]],
  ["v-5a4f47cb","/blogs/Engineering/AutomatedConstruction.html",{"title":"自动化"},["/blogs/Engineering/AutomatedConstruction","/blogs/Engineering/AutomatedConstruction.md"]],
  ["v-755a0f4c","/blogs/Engineering/cli.html",{"title":"脚手架"},["/blogs/Engineering/cli","/blogs/Engineering/cli.md"]],
  ["v-ac69d50c","/blogs/Engineering/module.html",{"title":"模块化"},["/blogs/Engineering/module","/blogs/Engineering/module.md"]],
  ["v-75057889","/blogs/Engineering/standard.html",{"title":"规范化标准"},["/blogs/Engineering/standard","/blogs/Engineering/standard.md"]],
  ["v-7bd0d8c2","/blogs/Engineering/webpack.html",{"title":"webpack"},["/blogs/Engineering/webpack","/blogs/Engineering/webpack.md"]],
  ["v-1a5cbb54","/blogs/English/",{"title":"英语"},["/blogs/English/index.html","/blogs/English/index.md"]],
  ["v-eee72c6c","/blogs/Nodejs/advanced.html",{"title":"Node.js 高级编程"},["/blogs/Nodejs/advanced","/blogs/Nodejs/advanced.md"]],
  ["v-64445fae","/blogs/Notes/JavaScriptPerformanceOptimization.html",{"title":""},["/blogs/Notes/JavaScriptPerformanceOptimization","/blogs/Notes/JavaScriptPerformanceOptimization.md"]],
  ["v-657731e5","/blogs/Notes/",{"title":""},["/blogs/Notes/index.html","/blogs/Notes/README.md"]],
  ["v-1652a7bc","/blogs/ComputerBasics/Algorethm/001.html",{"title":"算法"},["/blogs/ComputerBasics/Algorethm/001","/blogs/ComputerBasics/Algorethm/001.md"]],
  ["v-0ed8d686","/blogs/ComputerBasics/DataStructure/001.html",{"title":"数据结构"},["/blogs/ComputerBasics/DataStructure/001","/blogs/ComputerBasics/DataStructure/001.md"]],
  ["v-3116b39d","/blogs/ComputerBasics/git/001.html",{"title":"git"},["/blogs/ComputerBasics/git/001","/blogs/ComputerBasics/git/001.md"]],
  ["v-c0ca8796","/blogs/ComputerBasics/webprotocal/001.html",{"title":"网络协议"},["/blogs/ComputerBasics/webprotocal/001","/blogs/ComputerBasics/webprotocal/001.md"]],
  ["v-2d2b78cc","/blogs/FrontEnd/css/001.html",{"title":"CSS"},["/blogs/FrontEnd/css/001","/blogs/FrontEnd/css/001.md"]],
  ["v-29c1c78e","/blogs/FrontEnd/css/002.html",{"title":"CSS 常见考点"},["/blogs/FrontEnd/css/002","/blogs/FrontEnd/css/002.md"]],
  ["v-4c67094e","/blogs/FrontEnd/functional/001.html",{"title":"函数式编程"},["/blogs/FrontEnd/functional/001","/blogs/FrontEnd/functional/001.md"]],
  ["v-360027b4","/blogs/FrontEnd/html/001.html",{"title":"HTML"},["/blogs/FrontEnd/html/001","/blogs/FrontEnd/html/001.md"]],
  ["v-32967676","/blogs/FrontEnd/html/002.html",{"title":"HTML常见考点"},["/blogs/FrontEnd/html/002","/blogs/FrontEnd/html/002.md"]],
  ["v-458ad124","/blogs/FrontEnd/javascript/001.html",{"title":"学习资料"},["/blogs/FrontEnd/javascript/001","/blogs/FrontEnd/javascript/001.md"]],
  ["v-473fa9c3","/blogs/FrontEnd/javascript/002.html",{"title":"JavaScript常见考点"},["/blogs/FrontEnd/javascript/002","/blogs/FrontEnd/javascript/002.md"]],
  ["v-2ddfd810","/blogs/FrontEnd/javascript/Typescript.html",{"title":"TypeScript高级编程"},["/blogs/FrontEnd/javascript/Typescript","/blogs/FrontEnd/javascript/Typescript.md"]],
  ["v-029178b9","/blogs/FrontEnd/javascript/async.html",{"title":"异步"},["/blogs/FrontEnd/javascript/async","/blogs/FrontEnd/javascript/async.md"]],
  ["v-5feb718f","/blogs/FrontEnd/javascript/es.html",{"title":"ES新特性"},["/blogs/FrontEnd/javascript/es","/blogs/FrontEnd/javascript/es.md"]],
  ["v-38aebd5a","/blogs/FrontEnd/javascript/functional.html",{"title":"函数"},["/blogs/FrontEnd/javascript/functional","/blogs/FrontEnd/javascript/functional.md"]],
  ["v-36f22282","/blogs/FrontEnd/javascript/preformance.html",{"title":"性能优化"},["/blogs/FrontEnd/javascript/preformance","/blogs/FrontEnd/javascript/preformance.md"]],
  ["v-0c24be1e","/blogs/FrontEnd/react/001.html",{"title":"React"},["/blogs/FrontEnd/react/001","/blogs/FrontEnd/react/001.md"]],
  ["v-495ebf77","/blogs/FrontEnd/vue/001.html",{"title":"VUE"},["/blogs/FrontEnd/vue/001","/blogs/FrontEnd/vue/001.md"]],
  ["v-4cc870b5","/blogs/FrontEnd/vue/003.html",{"title":"数据驱动"},["/blogs/FrontEnd/vue/003","/blogs/FrontEnd/vue/003.md"]],
  ["v-4e7d4954","/blogs/FrontEnd/vue/004.html",{"title":"promise"},["/blogs/FrontEnd/vue/004","/blogs/FrontEnd/vue/004.md"]],
  ["v-503221f3","/blogs/FrontEnd/vue/005.html",{"title":"学习资料"},["/blogs/FrontEnd/vue/005","/blogs/FrontEnd/vue/005.md"]],
  ["v-799ba811","/blogs/FrontEnd/CoreFramework/React/Advanced.html",{"title":"React高级进阶"},["/blogs/FrontEnd/CoreFramework/React/Advanced","/blogs/FrontEnd/CoreFramework/React/Advanced.md"]],
  ["v-efdd6a3e","/blogs/FrontEnd/CoreFramework/React/DesignPrinciple.html",{"title":"React 设计原理"},["/blogs/FrontEnd/CoreFramework/React/DesignPrinciple","/blogs/FrontEnd/CoreFramework/React/DesignPrinciple.md"]],
  ["v-8e6aab50","/blogs/FrontEnd/CoreFramework/Vue/Advanced.html",{"title":"Vue高级进阶"},["/blogs/FrontEnd/CoreFramework/Vue/Advanced","/blogs/FrontEnd/CoreFramework/Vue/Advanced.md"]],
  ["v-4640dc9c","/blogs/FrontEnd/CoreFramework/Vue/Principle.html",{"title":"Vue原理"},["/blogs/FrontEnd/CoreFramework/Vue/Principle","/blogs/FrontEnd/CoreFramework/Vue/Principle.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
