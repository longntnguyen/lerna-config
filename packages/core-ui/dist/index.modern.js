import { createElement } from 'react';
import { Button } from 'antd';

var styles = {"test":"_styles-module__test__3wJe6","red":"_styles-module__red__1i6CQ"};

const ExampleComponent = ({
  text
}) => {
  return createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
const ButtonUI = ({
  children
}) => {
  return createElement(Button, {
    shape: 'round',
    className: styles.red
  }, children);
};
const ButtonUI2 = ({
  children
}) => {
  return createElement("button", {
    className: styles.red
  }, children);
};

export { ButtonUI, ButtonUI2, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
