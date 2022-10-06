import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index-module_test__8aqmu{background:#9acd32}";
var style = {"test":"index-module_test__8aqmu"};
styleInject(css_248z);

// see: https://github.com/storybookjs/storybook/issues/9556

/**
 * A custom Thing component. Neat!
 */

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, React.createElement("div", {
    className: style.test
  }, children || 'test'));
};

// see: https://github.com/storybookjs/storybook/issues/9556

/**
 * A custom Thing component. Neat!
 */

var Test = function Test() {
  return React.createElement("div", null, "tes2t");
};

export { Test, Thing };
//# sourceMappingURL=ui.esm.js.map
