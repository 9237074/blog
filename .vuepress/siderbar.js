const { createSideBarConfig } = require('./util')
const FRONTEND_PATH = '/blogs/FrontEnd'
const ComputerBasics = '/blogs/ComputerBasics'
const Engineering = '/blogs/Engineering'

const html = createSideBarConfig('Html', `${FRONTEND_PATH}/html`)
const css = createSideBarConfig('Css', `${FRONTEND_PATH}/css`)
const javascript = createSideBarConfig('Javascript', `${FRONTEND_PATH}/javascript`)
const vue = createSideBarConfig('Vue', `${FRONTEND_PATH}/vue`)
const react = createSideBarConfig('React', `${FRONTEND_PATH}/react`)

const dataStructure = createSideBarConfig('数据结构', `${ComputerBasics}/DataStructure`)
const algorethm = createSideBarConfig('算法', `${ComputerBasics}/Algorethm`)
const webprotocal = createSideBarConfig('网路协议', `${ComputerBasics}/Algorethm`)


const git = createSideBarConfig('Git', `${Engineering}/git`)
const engineeringMoudle = createSideBarConfig('模块化', `${Engineering}/module`)
const webpack = createSideBarConfig('Webpack', `${Engineering}/webpack`)
const automatedConstruction = createSideBarConfig('自动化构建', `${Engineering}/AutomatedConstruction`)


module.exports = {
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
  [Engineering]: [
    git,
    engineeringMoudle,
    webpack,
    automatedConstruction
  ]
}