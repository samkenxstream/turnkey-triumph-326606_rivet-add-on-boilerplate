(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MyComponent = factory());
}(this, (function () { 'use strict';

  var gatherInput = function gatherInput(event) {
    var button = event.target.closest("#my-button");

    if (!button) return;

    var message = prompt('What would you like me to say?');

    if (!message) {
      alert('You need to ask me a question if you want an answer.');
      return;
    }

    alert(message);
  };

  var init = function init() {
    document.addEventListener("click", gatherInput);
  };

  /**
   * Export the methods you want to make public inside of this object.
   */
  var rvtComponent = { init: init };

  return rvtComponent;

})));
//# sourceMappingURL=rvt-component.js.map
