// Listener
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector ("#new-item-form");
  form.addEventListener('submit',handleFormSubmit);

  const newButton = document.createElement("button");
  newButton.textContent = "delete all";
  newButton.classList.add =("#delete-button");

  const body = document.querySelector("body");
  body.appendChild(newButton);

  // const delete = document.querySelector('#delete-button');
  // form.addEventListener('submit', handleDeleteForm);
});

const handleFormSubmit = function(event){
  event.preventDefault();
  const newListItem = document.createElement("li");

  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value

  newListItem.textContent = `${title}, ${author} [${category}]`;
  newListItem.classList.add("#new-list-item");

  const list = document.querySelector("#reading-list");
  list.appendChild(newListItem);

  event.target.reset();
  
  // const form = document.querySelector ("#new-item-form");

  // form.reset() ;
};




