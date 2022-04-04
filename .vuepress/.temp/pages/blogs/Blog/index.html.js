export const data = {
  "key": "v-6df63596",
  "path": "/blogs/Blog/",
  "title": "日志",
  "lang": "zh",
  "frontmatter": {
    "sidebar": "auto"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "日志1",
      "slug": "日志1",
      "children": [
        {
          "level": 3,
          "title": "第一个",
          "slug": "第一个",
          "children": []
        },
        {
          "level": 3,
          "title": "第二个",
          "slug": "第二个",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "日志2",
      "slug": "日志2",
      "children": []
    },
    {
      "level": 2,
      "title": "第三个",
      "slug": "第三个",
      "children": []
    }
  ],
  "filePathRelative": "blogs/Blog/index.md"
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
