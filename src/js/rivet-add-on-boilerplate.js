import { gatherInput, nodeListToArray } from './rvt-utils';

const init = () => {
  document.addEventListener("click", gatherInput);

  console.log(nodeListToArray('li'));
  // Logs all the list items on the page
}

/**
 * Export the methods you want to make public inside of this object.
 */
export default { init };