const { createSideBarConfig } = require('./util')
const FRONTEND_PATH = '/blogs/FrontEnd'

module.exports = {
  [FRONTEND_PATH]: [
    createSideBarConfig('前端', FRONTEND_PATH + '/vue'),
    createSideBarConfig('前端', FRONTEND_PATH + '/react')
  ],
}