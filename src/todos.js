import { resetTodoForm, saveAndRender } from "./dom";
import {
  addTodoToProject,
  getProjects,
  getSelectedProjectId,
} from "./projects";

const todo = (title, description, dueDate, priority) => {
  return {
    id: Date.now().toString(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
  };
};

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
