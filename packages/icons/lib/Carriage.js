'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.SvgCarriage = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
)

var _react = _interopRequireDefault(require('react'))

var _Svg = _interopRequireDefault(require('./Svg'))

var SvgCarriage = function SvgCarriage(_ref) {
  var size = _ref.size,
    props = (0, _objectWithoutProperties2.default)(_ref, ['size'])
  return _react.default.createElement(
    _Svg.default,
    (0, _extends2.default)(
      {
        viewBox: '0 0 24 24',
        height: size,
        width: size,
        fill: 'currentcolor'
      },
      props
    ),
    _react.default.createElement('path', {
      d:
        'M13.5 2v8h8c0-4.4-3.6-8-8-8zm6.3 13.9c1.1-1.4 1.7-3.1 1.7-4.9H6.9L6 9H2.5v2h2.2s1.9 4.1 2.1 4.4C5.7 16 5 17.2 5 18.5 5 20.4 6.6 22 8.5 22c1.8 0 3.2-1.3 3.5-3h2c.2 1.7 1.7 3 3.5 3 1.9 0 3.5-1.6 3.5-3.5 0-1-.5-2-1.2-2.6zM8.5 20c-.8 0-1.5-.7-1.5-1.5S7.7 17 8.5 17s1.5.7 1.5 1.5S9.3 20 8.5 20zm9 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z'
    })
  )
}

exports.SvgCarriage = SvgCarriage
SvgCarriage.isIcon = true
SvgCarriage.defaultProps = {
  size: 24
}
var _default = SvgCarriage
exports.default = _default