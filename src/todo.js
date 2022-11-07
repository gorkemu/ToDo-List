import { addTodoToDom } from "./dom";

const todo = (title, description, dueDate) => {

    return { title, description, dueDate }
};

let myTodos = [];

export function addTodo() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#duedate').value;
    const priority = document.querySelector('#priority').value;
    const newTodo = todo(title, description, dueDate, priority);
    myTodos.push(newTodo);
    addTodoToDom(title,description, dueDate, priority);
  };