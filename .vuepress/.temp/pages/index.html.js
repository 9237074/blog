export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh",
  "frontmatter": {
    "home": true,
    "heroImage": "/favicon.ico",
    "heroText": "Cream 💪",
    "tagline": "让输出倒逼输入",
    "layout": false,
    "actions": [
      {
        "text": "前端",
        "link": "/blogs/FrontEnd/html/001",
        "type": "secondary"
      },
      {
        "text": "计算机基础",
        "link": "/blogs/ComputerBasics/DataStructure/001",
        "type": "secondary"
      },
      {
        "text": "常见解决方案",
        "link": "/blogs/Solution/FCP",
        "type": "secondary"
      }
    ],
    "footer": "Copyright © 2022 Cream",
    "footerHtml": true
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
