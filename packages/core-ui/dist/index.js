var React = require('react')
var antd = require('antd')

var styles = {
  test: '_styles-module__test__3wJe6',
  red: '_styles-module__red__1i6CQ'
}

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text
  return React.createElement(
    'div',
    {
      className: styles.test
    },
    'Example Component: ',
    text
  )
}
var ButtonUI = function ButtonUI(_ref2) {
  var children = _ref2.children
  return React.createElement(
    antd.Button,
    {
      shape: 'round',
      className: styles.red
    },
    children
  )
}
var ButtonUI2 = function ButtonUI2(_ref3) {
  var children = _ref3.children
  return React.createElement(
    'button',
    {
      className: styles.red
    },
    children
  )
}

exports.ButtonUI = ButtonUI
exports.ButtonUI2 = ButtonUI2
exports.ExampleComponent = ExampleComponent
//# sourceMappingURL=index.js.map
