"use strict";

class TodoList {
  constructor(title, dueDate, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.id = crypto.randomUUID();
  }
}
//how to find out which project this todo list goes
const addTodo = {
  add() {
    const todo = new TodoList(title, dueDate, desicription);
    arr.push(todo);
    return todo;
  },
};

Object.assign(TodoList.prototype, addTodo);

function createProject() {
  //needs to ask a name of the project from user interaction
  const projID = crypto.randomUUID();
  const proj = [{ projID: projID }];
  return proj;
}

class ProjectList {
  constructor(title) {
    this.title = title;
    this.projID = crypto.randomUUID();
  }
  projectArr() {
    const proj = [{ projID: this.projID, title: this.title }];
    return proj;
  }
}
