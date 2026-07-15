//target the body container
const bigContainer = document.querySelector("body");

//Create Project button
const createProj = document.querySelector(".create-proj");
createProj.setAttribute("id", "createProject");

//Confirm Project Button
const confirmProjBtn = document.querySelector("confirmProj");
confirmProjBtn.setAttribute("id", "confirmProj");

//Project title save button
const titleSave = document.querySelector(".save-title");
titleSave.setAttribute("id", "titleSave");
//Add todo item
const addTodoBtn = document.querySelector(".add-todo");
addTodoBtn.setAttribute("id", "addTodo");

//Todo item confirm button
const confirmTodo = document.querySelector(".confirmTodo");
todoItemBtn.setAttribute("id", "confirmTodo");

const projDialog = document.querySelector(".proj-dialog");
const todoDialog = document.querySelector(".todo-dialog");

//This function will return the passed value and it will be used as an argument of the project class

export function projectWrapper() {
  return (titleValue = document.querySelector("#projectTitle").value);
  //how to send the returned value to another module since it is needed in the core logic
}

export function todoItem() {
  titleValue = document.querySelector("#title").value;
  dueDateValue = document.querySelector("#dueDate").value;
  priorityValue = document.querySelector("#priority").value;
  descValue = document.querySelector("#description").value;

  let arr = [titleValue, dueDateValue, priorityValue, descValue];

  return arr;
}

bigContainer.addEventListener("click", (event) => {
  if (event.target.id === "createProject") {
    console.log(event.target.textContent);
    projDialog.showModal();
  } else if (event.target.id === "confirmProj") {
    projectWrapper();
    //gets the details filled in by the user
    //the details are applied in the Project Class
  } else if (event.target.id === "addTodo") {
    console.log(event.target.textContent);
    todoDialog.showModal();
  } else if (event.target.id === "confirmTodo") {
    //gets the user input details and populates the Todo Item Class using the user input details
    //this needs to happen not in the same user interface
  } else if (event.target.id === "titleSave") {
    //this will activate a function that would get the title of the project and use it as parameters of the Project class
    //the problem is how will this connect to the added todo items since it is in a different function?
  }
});
