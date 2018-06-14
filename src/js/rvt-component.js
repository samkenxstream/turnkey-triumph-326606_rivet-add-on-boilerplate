import { gatherInput } from './rvt-utils';

const init = () => {
  document.addEventListener("click", gatherInput);
}

/**
 * Export the methods you want to make public inside of this object.
 */
export default { init };