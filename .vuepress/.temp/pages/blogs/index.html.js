export const data = {
  "key": "v-76fdf177",
  "path": "/blogs/",
  "title": "",
  "lang": "zh",
  "frontmatter": {
    "home": true,
    "heroText": "Cream 💪",
    "tagline": "让输出倒逼输入",
    "actionText": "快速上手 →",
    "actionLink": "https://github.com/9237074/blog",
    "features": [
      {
        "title": "前端",
        "details": null
      },
      {
        "title": "计算机基础",
        "details": null
      },
      {
        "title": "常见解决方案",
        "details": null
      }
    ],
    "footer": "Copyright © 2021 Cream"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "blogs/README.md"
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
