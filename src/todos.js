import { resetTodoForm, saveAndRender } from "./dom";
import {
  addTodoToProject,
} from "./projects";

const todo = (title, description, dueDate, priority) => ({
    id: Date.now().toString(),
    title,
    description,
    dueDate,
    priority,
  });

export function addTodo() {
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const dueDate = document.querySelector("#duedate").value;
  const priority = document.querySelector("#priority").value;
  const newTodo = todo(title, description, dueDate, priority);
  addTodoToProject(newTodo);
  saveAndRender();
  resetTodoForm();
}
