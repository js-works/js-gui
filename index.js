'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/js-gui.cjs.production.js')
} else {
  module.exports = require('./dist/js-gui.cjs.development.js')
}