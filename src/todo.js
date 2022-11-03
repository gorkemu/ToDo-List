import { addTaskToDom } from "./dom";

const todo = (title, description, dueDate) => {

    return { title, description, dueDate }
};

let myTasks = [];

export function addTask() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#duedate').value;
    const priority = document.querySelector('#priority').value;
    const newTask = todo(title, description, dueDate, priority);
    myTasks.push(newTask);
    addTaskToDom(title,description, dueDate, priority);
  };