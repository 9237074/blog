export const data = {
  "key": "v-360027b4",
  "path": "/blogs/FrontEnd/html/001.html",
  "title": "HTML",
  "lang": "zh",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "MDN",
      "slug": "mdn",
      "children": []
    },
    {
      "level": 2,
      "title": "WHATWG",
      "slug": "whatwg",
      "children": []
    }
  ],
  "filePathRelative": "blogs/FrontEnd/html/001.md"
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
