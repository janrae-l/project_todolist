//target the body container
const bigContainer = document.querySelector("body");

//Create Project button
const createProj = document.querySelector(".create-proj");
createProj.setAttribute("id", "createProject");

//Confirm Project Button
const confirmProjBtn = document.querySelector("confirmProj");
confirmProjBtn.setAttribute("id", "confirmProj");

//Add todo item
const addTodoBtn = document.querySelector(".add-todo");
addTodoBtn.setAttribute("id", "addTodo");

//Todo item confirm button
const confirmTodo = document.querySelector(".confirmTodo");
todoItemBtn.setAttribute("id", "confirmTodo");

const projDialog = document.querySelector(".proj-dialog");
const todoDialog = document.querySelector(".todo-dialog");

function projectWrapper() {
  const titleValue = document.querySelector("#projectTitle").value;
  //how to send the returned value to another module since it is needed in the core logic
}

bigContainer.addEventListener("click", (event) => {
  if (event.target.id === "createProject") {
    console.log(event.target.textContent);
    projDialog.showModal();
  } else if (event.target.id === "confirmProj") {
    //gets the details filled in by the user
    //the details are applied in the Project Class
  } else if (event.target.id === "addTodo") {
    console.log(event.target.textContent);
    todoDialog.showModal();
  } else if (event.target.id === "confirmTodo") {
    //gets the user input details and populates the Todo Item Class using the user input details
    //this needs to happen not in the same user interface
  }
});
