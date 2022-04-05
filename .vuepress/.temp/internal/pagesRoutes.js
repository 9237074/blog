import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-76fdf177","/blogs/",{"title":""},["/blogs/index.html","/blogs/README.md"]],
  ["v-6df63596","/blogs/Blog/",{"title":"日志"},["/blogs/Blog/index.html","/blogs/Blog/index.md"]],
  ["v-69a34cb8","/blogs/ComputerBasics/",{"title":"计算机基础"},["/blogs/ComputerBasics/index.html","/blogs/ComputerBasics/index.md"]],
  ["v-1a5cbb54","/blogs/English/",{"title":"英语"},["/blogs/English/index.html","/blogs/English/index.md"]],
  ["v-64445fae","/blogs/Notes/JavaScriptPerformanceOptimization.html",{"title":""},["/blogs/Notes/JavaScriptPerformanceOptimization","/blogs/Notes/JavaScriptPerformanceOptimization.md"]],
  ["v-657731e5","/blogs/Notes/",{"title":""},["/blogs/Notes/index.html","/blogs/Notes/README.md"]],
  ["v-1652a7bc","/blogs/ComputerBasics/Algorethm/001.html",{"title":"算法"},["/blogs/ComputerBasics/Algorethm/001","/blogs/ComputerBasics/Algorethm/001.md"]],
  ["v-0ed8d686","/blogs/ComputerBasics/DataStructure/001.html",{"title":"数据结构"},["/blogs/ComputerBasics/DataStructure/001","/blogs/ComputerBasics/DataStructure/001.md"]],
  ["v-c0ca8796","/blogs/ComputerBasics/webprotocal/001.html",{"title":"网络协议"},["/blogs/ComputerBasics/webprotocal/001","/blogs/ComputerBasics/webprotocal/001.md"]],
  ["v-1a80472e","/blogs/Engineering/AutomatedConstruction/001.html",{"title":"自动化构建工具"},["/blogs/Engineering/AutomatedConstruction/001","/blogs/Engineering/AutomatedConstruction/001.md"]],
  ["v-536954f8","/blogs/Engineering/git/001.html",{"title":"git"},["/blogs/Engineering/git/001","/blogs/Engineering/git/001.md"]],
  ["v-5f2f3a98","/blogs/Engineering/module/001.html",{"title":"模块化"},["/blogs/Engineering/module/001","/blogs/Engineering/module/001.md"]],
  ["v-63161e3d","/blogs/Engineering/webpack/001.html",{"title":"webpack"},["/blogs/Engineering/webpack/001","/blogs/Engineering/webpack/001.md"]],
  ["v-2d2b78cc","/blogs/FrontEnd/css/001.html",{"title":"CSS"},["/blogs/FrontEnd/css/001","/blogs/FrontEnd/css/001.md"]],
  ["v-4c67094e","/blogs/FrontEnd/functional/001.html",{"title":"函数式编程"},["/blogs/FrontEnd/functional/001","/blogs/FrontEnd/functional/001.md"]],
  ["v-360027b4","/blogs/FrontEnd/html/001.html",{"title":"html"},["/blogs/FrontEnd/html/001","/blogs/FrontEnd/html/001.md"]],
  ["v-32967676","/blogs/FrontEnd/html/002.html",{"title":"002"},["/blogs/FrontEnd/html/002","/blogs/FrontEnd/html/002.md"]],
  ["v-458ad124","/blogs/FrontEnd/javascript/001.html",{"title":"javascript"},["/blogs/FrontEnd/javascript/001","/blogs/FrontEnd/javascript/001.md"]],
  ["v-0c24be1e","/blogs/FrontEnd/react/001.html",{"title":"React"},["/blogs/FrontEnd/react/001","/blogs/FrontEnd/react/001.md"]],
  ["v-495ebf77","/blogs/FrontEnd/vue/001.html",{"title":"VUE"},["/blogs/FrontEnd/vue/001","/blogs/FrontEnd/vue/001.md"]],
  ["v-4cc870b5","/blogs/FrontEnd/vue/003.html",{"title":"数据驱动1"},["/blogs/FrontEnd/vue/003","/blogs/FrontEnd/vue/003.md"]],
  ["v-4e7d4954","/blogs/FrontEnd/vue/004.html",{"title":"promise"},["/blogs/FrontEnd/vue/004","/blogs/FrontEnd/vue/004.md"]],
  ["v-503221f3","/blogs/FrontEnd/vue/005.html",{"title":"学习资料"},["/blogs/FrontEnd/vue/005","/blogs/FrontEnd/vue/005.md"]],
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
