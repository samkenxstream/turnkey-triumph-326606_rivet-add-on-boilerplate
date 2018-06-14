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