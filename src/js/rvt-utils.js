// This is just a fake example function. Delet it and get started.
export const gatherInput = event => {
  let button = event.target.closest("#my-button");

  if (!button) return;

  let message = prompt('What would you like me to say?');

  if (!message) {
    alert('You need to ask me a question if you want an answer.');
    return;
  }

  alert(message);
}

/**
 *
 * @param {String} selector
 * @param {HTMLElement} context
 *
 * This is a helper function to convert a NodeList to an array so that
 * you can use array methods like .forEach, etc. on it.
 */
export const nodeListToArray = (selector, context = document) => {
  let newArray =
    Array.prototype.slice.call(
      context.querySelectorAll(selector)
    );

  return newArray;
};