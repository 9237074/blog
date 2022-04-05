import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path';
import sidebar from './siderbar';
import navbar from './navbar';

export default defineUserConfig<DefaultThemeOptions>({
  base: '/blog/',
  lang: 'zh',
  title: 'Cream 在努力💪',
  description: '让输出倒逼输入',
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    navbar,
    repo: '9237074/blog',
    sidebar,
    sidebarDepth: 2,
    editLink: false,
    lastUpdated: false,
    contributors: false
  },
  alias: {
    '@theme/Page.vue': path.resolve(__dirname, './components/CustomPage.vue'),
  },
  plugins: [[
    '@vuepress/register-components',
    {
      components: {
        'my-demo': path.resolve(__dirname, './components/my-demo.vue'),
        'CustomLayout': path.resolve(__dirname, './components/CustomLayout.vue'),
      },
    },
  ]
  ]
})