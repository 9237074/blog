import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("my-demo", defineAsyncComponent(() => import("/Users/cream/Desktop/code/blog/.vuepress/components/my-demo.vue")))
}
