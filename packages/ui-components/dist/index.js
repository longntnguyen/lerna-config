var React = require('react');

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var Button = function Button(_ref2) {
  var children = _ref2.children;
  return React.createElement("button", null, " TH\u1ECANH", children);
};

exports.Button = Button;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map
