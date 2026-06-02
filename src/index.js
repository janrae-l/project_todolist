"use strict";

class TodoList {
  constructor(title, dueDate, description) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.id = crypto.randomUUID();
  }
}

const addTodo = {
  add() {
    const todo = new TodoList(title, dueDate, desicription);
    arr.push(todo);
    return todo;
  },
};

Object.assign(TodoList.prototype, addTodo);

function createProject() {
  const projID = crypto.randomUUID();
  const proj = [{ projID: projID }];
  return proj;
}
