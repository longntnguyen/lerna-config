import { createElement } from 'react';

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var Button = function Button(_ref2) {
  var children = _ref2.children;
  return createElement("button", null, " TH\u1ECANH", children);
};

export { Button, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
