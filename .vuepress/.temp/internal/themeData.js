export const themeData = {
  "navbar": [
    {
      "text": "前端",
      "ariaLabel": "FrontEnd",
      "children": [
        {
          "text": "HTML",
          "link": "/blogs/FrontEnd/html/001"
        },
        {
          "text": "CSS",
          "link": "/blogs/FrontEnd/css/001"
        },
        {
          "text": "JavaScript",
          "link": "/blogs/FrontEnd/javascript/001"
        },
        {
          "text": "Vue",
          "link": "/blogs/FrontEnd/vue/001"
        },
        {
          "text": "React",
          "link": "/blogs/FrontEnd/react/001"
        }
      ]
    },
    {
      "text": "计算机基础",
      "ariaLabel": "",
      "children": [
        {
          "text": "数据结构",
          "link": "/blogs/ComputerBasics/DataStructure/001"
        },
        {
          "text": "算法",
          "link": "/blogs/ComputerBasics/Algorethm/001"
        },
        {
          "text": "网络协议",
          "link": "/blogs/ComputerBasics/webprotocal/001"
        }
      ]
    },
    {
      "text": "Node.js",
      "link": "/blogs/Nodejs/Advanced"
    },
    {
      "text": "核心框架原理",
      "children": [
        {
          "text": "Vue",
          "link": "/blogs/FrontEnd/CoreFramework/Vue/Principle"
        },
        {
          "text": "React",
          "link": "/blogs/FrontEnd/CoreFramework/React/Advanced"
        }
      ]
    },
    {
      "text": "工程化",
      "link": "/blogs/Engineering/module"
    },
    {
      "text": "常用解决方案",
      "link": "/blogs/Solution/FCP"
    }
  ],
  "repo": "9237074/blog",
  "sidebar": {
    "/blogs/FrontEnd": [
      {
        "text": "HTML",
        "collapsible": true,
        "children": [
          "/blogs/FrontEnd/html/001",
          "/blogs/FrontEnd/html/002"
        ]
      },
      {
        "text": "CSS",
        "collapsible": true,
        "children": [
          "/blogs/FrontEnd/css/001",
          "/blogs/FrontEnd/css/002"
        ]
      },
      {
        "text": "JavaScript",
        "collapsible": true,
        "children": [
          "/blogs/FrontEnd/javascript/001",
          "/blogs/FrontEnd/javascript/002",
          "/blogs/FrontEnd/javascript/Typescript",
          "/blogs/FrontEnd/javascript/async",
          "/blogs/FrontEnd/javascript/es",
          "/blogs/FrontEnd/javascript/functional",
          "/blogs/FrontEnd/javascript/preformance"
        ]
      },
      {
        "text": "Vue",
        "collapsible": true,
        "children": [
          "/blogs/FrontEnd/vue/001",
          "/blogs/FrontEnd/vue/003",
          "/blogs/FrontEnd/vue/004",
          "/blogs/FrontEnd/vue/005"
        ]
      },
      {
        "text": "React",
        "collapsible": true,
        "children": [
          "/blogs/FrontEnd/react/001"
        ]
      }
    ],
    "/blogs/ComputerBasics": [
      {
        "text": "数据结构",
        "collapsible": true,
        "children": [
          "/blogs/ComputerBasics/DataStructure/001"
        ]
      },
      {
        "text": "算法",
        "collapsible": true,
        "children": [
          "/blogs/ComputerBasics/Algorethm/001"
        ]
      },
      {
        "text": "网络协议",
        "collapsible": true,
        "children": [
          "/blogs/ComputerBasics/Webprotocal/001"
        ]
      }
    ],
    "/blogs/FrontEnd/CoreFramework": [
      {
        "text": "Vue",
        "collapsible": true,
        "children": [
          "/blogs/FrontEnd/CoreFramework/Vue/Advanced",
          "/blogs/FrontEnd/CoreFramework/Vue/Principle"
        ]
      },
      {
        "text": "React",
        "collapsible": true,
        "children": [
          "/blogs/FrontEnd/CoreFramework/React/Advanced",
          "/blogs/FrontEnd/CoreFramework/React/DesignPrinciple"
        ]
      }
    ],
    "/blogs/Engineering": [
      {
        "text": "前端工程化",
        "collapsible": false,
        "children": [
          "/blogs/Engineering/AutomatedConstruction",
          "/blogs/Engineering/cli",
          "/blogs/Engineering/module",
          "/blogs/Engineering/standard",
          "/blogs/Engineering/webpack"
        ]
      }
    ],
    "/blogs/Nodejs": [
      {
        "text": "NodeJS高级编程",
        "collapsible": false,
        "children": [
          "/blogs/Nodejs/advanced"
        ]
      }
    ],
    "/blogs/Solution": [
      {
        "text": "首屏性能提升方案",
        "collapsible": false,
        "children": [
          "/blogs/Solution/API",
          "/blogs/Solution/FCP",
          "/blogs/Solution/LongList",
          "/blogs/Solution/Middleware"
        ]
      }
    ]
  },
  "sidebarDepth": 2,
  "editLink": false,
  "lastUpdated": false,
  "contributors": false,
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
