export const data = {
  "key": "v-0c24be1e",
  "path": "/blogs/FrontEnd/react/001.html",
  "title": "React",
  "lang": "zh",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "学习资料",
      "slug": "学习资料",
      "children": []
    }
  ],
  "filePathRelative": "blogs/FrontEnd/react/001.md"
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
