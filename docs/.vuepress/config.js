module.exports = {
    title: 'Cream 在💪学前端',
    description: '让输出倒逼输入',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        nav: [
            { text: '前端', link: '/FrontEnd/' },
            { text: '计算机基础', link: '/ComputerBasics/' },
            { text: '数据结构与算法', link: '/Dense/' },
            { text: '英语四级', link: '/English/' },
            { text: '杂文', link: '/Blog/' }
        ],
        nextLinks: false,
        prevLinks: false
    },
    search: false,
    configureWebpack: {
        resolve: {
          alias: {
            '@': '/docs'
          }
        }
      }
}