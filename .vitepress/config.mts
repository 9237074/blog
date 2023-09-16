import { defineConfig } from 'vitepress'

import nav from './navbar'
import sidebar from './siderbar'

const year = new Date().getFullYear()
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh',
  title: 'Cream Blog',
  description: '让输出倒逼输入',
  head: [['link', { rel: 'icon', href: '../static/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/9237074/blog' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: `Copyright © ${year} <a href="https://github.com/9237074">Cream</a>`
    }
  },
  ignoreDeadLinks: true,
})
