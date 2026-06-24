//target the body container
const bigContainer = document.querySelector("body");

//Create Project button
const createProj = document.querySelector(".create-proj");
createProj.setAttribute("id", "createProject")

//Confirm Project Button
const confirmProjBtn = document.querySelector("confirmProj")
confirmProjBtn.setAttribute("id", "confirmProj")

//Add todo item
const addTodoBtn = document.querySelector(".add-todo")
addTodoBtn.setAttribute("id", "addTodo")

//Todo item confirm button
const todoItemBtn = document.querySelector(".todoBtn");
todoItemBtn.setAttribute("id", "todoItem")

const projDialog = document.querySelector(".proj-dialog");
const todoDialog = document.querySelector(".todo-dialog");

bigContainer.addEventListener("click", (event) => {
    if (event.target.id === "createProject") {
        console.log(event.target.textContent);
        projDialog.showModal();
    } else if (event.target.id === "confirmProj") {
        //gets the details filled in by the user
        //the details are applied in the Project Class
    } else if (event.target.id === "")
});
