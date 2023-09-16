import DefaultTheme from 'vitepress/theme'
import RightLayout from "../layout/right-layout.vue";
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('right-layout', RightLayout)
    }
}