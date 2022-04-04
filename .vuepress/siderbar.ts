import createSideBarConfig from './util'
const FRONTEND_PATH = '/blogs/FrontEnd'
const ComputerBasics = '/blogs/ComputerBasics'
const Engineering = '/blogs/Engineering'

const html = createSideBarConfig('HTML', `${FRONTEND_PATH}/html`)
const css = createSideBarConfig('CSS', `${FRONTEND_PATH}/css`)
const javascript = createSideBarConfig('JavaScript', `${FRONTEND_PATH}/javascript`)
const vue = createSideBarConfig('Vue', `${FRONTEND_PATH}/vue`)
const react = createSideBarConfig('React', `${FRONTEND_PATH}/react`)
const functional = createSideBarConfig('函数式编程', `${FRONTEND_PATH}/functional`)

const dataStructure = createSideBarConfig('数据结构', `${ComputerBasics}/DataStructure`)
const algorethm = createSideBarConfig('算法', `${ComputerBasics}/Algorethm`)
const webprotocal = createSideBarConfig('网络协议', `${ComputerBasics}/Webprotocal`)


const git = createSideBarConfig('Git', `${Engineering}/git`)
const engineeringMoudle = createSideBarConfig('模块化', `${Engineering}/module`)
const webpack = createSideBarConfig('webpack', `${Engineering}/webpack`)
const automatedConstruction = createSideBarConfig('自动化构建', `${Engineering}/AutomatedConstruction`)

const sliderbar = {
  [FRONTEND_PATH]: [
    html,
    css,
    javascript,
    vue,
    react,
    functional
  ],
  [ComputerBasics]: [
    dataStructure,
    algorethm,
    webprotocal
  ],
  [Engineering]: [
    git,
    engineeringMoudle,
    webpack,
    automatedConstruction
  ]
}

export default sliderbar