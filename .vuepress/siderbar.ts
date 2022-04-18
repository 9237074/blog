import createSideBarConfig from './util'
const FRONTEND_PATH = '/blogs/FrontEnd'
const ComputerBasics = '/blogs/ComputerBasics'
const Engineering = '/blogs/Engineering'
const CoreFramework = '/blogs/FrontEnd/CoreFramework'
const Nodejs = '/blogs/Nodejs'
const Solution = '/blogs/Solution'

const html = createSideBarConfig('HTML', `${FRONTEND_PATH}/html`)
const css = createSideBarConfig('CSS', `${FRONTEND_PATH}/css`)
const javascript = createSideBarConfig('JavaScript', `${FRONTEND_PATH}/javascript`)
const vue = createSideBarConfig('Vue', `${FRONTEND_PATH}/vue`)
const react = createSideBarConfig('React', `${FRONTEND_PATH}/react`)

const dataStructure = createSideBarConfig('数据结构', `${ComputerBasics}/DataStructure`)
const algorethm = createSideBarConfig('算法', `${ComputerBasics}/Algorethm`)
const webprotocal = createSideBarConfig('网络协议', `${ComputerBasics}/Webprotocal`)


const engineering = createSideBarConfig('前端工程化', `${Engineering}`, false)

// const git = createSideBarConfig('Git', `${Engineering}/git`)
// const engineeringMoudle = createSideBarConfig('模块化', `${Engineering}/module`)
// const webpack = createSideBarConfig('webpack', `${Engineering}/webpack`)
// const automatedConstruction = createSideBarConfig('自动化构建', `${Engineering}/AutomatedConstruction`)

const Vue = createSideBarConfig('Vue', `${CoreFramework}/Vue`)
const React = createSideBarConfig('React', `${CoreFramework}/React`)

const NodeAdvanced = createSideBarConfig('NodeJS高级编程', `${Nodejs}`, false)

const FCP = createSideBarConfig('首屏性能提升方案', `${Solution}`, false)
// const API = createSideBarConfig('API接口鉴权方案', `${Solution}/API`)
// const middleware = createSideBarConfig('中间层方案', `${Solution}/middleware`)
// const LongList = createSideBarConfig('长列表无限滚动方案', `${Solution}/LongList`)

const sliderbar = {
  [FRONTEND_PATH]: [
    html,
    css,
    javascript,
    vue,
    react
  ],
  [ComputerBasics]: [
    dataStructure,
    algorethm,
    webprotocal
  ],
  [CoreFramework]: [
    Vue,
    React
  ],
  [Engineering]: [
    engineering
  ],
  [Nodejs]: [
    NodeAdvanced
  ],
  [Solution]: [
    FCP
  ]
}

export default sliderbar