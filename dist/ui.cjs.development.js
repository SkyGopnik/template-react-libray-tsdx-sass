'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var style = {"test":"index-module_test__8aqmu"};

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

exports.Test = Test;
exports.Thing = Thing;
//# sourceMappingURL=ui.cjs.development.js.map
