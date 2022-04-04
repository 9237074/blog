export const data = {
  "key": "v-5f2f3a98",
  "path": "/blogs/Engineering/module/001.html",
  "title": "模块化",
  "lang": "zh",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "blogs/Engineering/module/001.md"
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
