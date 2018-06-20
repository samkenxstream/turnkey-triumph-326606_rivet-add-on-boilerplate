/*! rivet-add-on-boilerplate - @version v0.1.0-alpha */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MyComponent = factory());
}(this, (function () { 'use strict';

  // This is just a fake example function. Delet it and get started.
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

  /**
   *
   * @param {String} selector
   * @param {HTMLElement} context
   *
   * This is a helper function to convert a NodeList to an array so that
   * you can use array methods like .forEach, etc. on it.
   */
  var nodeListToArray = function nodeListToArray(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    var newArray = Array.prototype.slice.call(context.querySelectorAll(selector));

    return newArray;
  };

  var init = function init() {
    document.addEventListener("click", gatherInput);

    console.log(nodeListToArray('li'));
    // Logs all the list items on the page
  };

  /**
   * Export the methods you want to make public inside of this object.
   */
  var rivetAddOnBoilerplate = { init: init };

  return rivetAddOnBoilerplate;

})));
//# sourceMappingURL=rivet-add-on-boilerplate.js.map
