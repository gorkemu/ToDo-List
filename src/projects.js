import { resetProjectForm, saveAndRender } from './dom';

const LOCAL_STORAGE_PROJECT_KEY = 'todo.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todo.selectedProjectId';

let myProjects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
);

const project = (name) => ({ id: Date.now().toString(), name, todos: [] });

export function save() {
  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(myProjects));
  localStorage.setItem(
    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,
    selectedProjectId,
  );
}

export function getProjects() {
  return myProjects;
}

export function getTodos(selectedProject) {
  return selectedProject.todos;
}

export function getSelectedProjectId() {
  return selectedProjectId;
}

export function createProject() {
  const newProjectInput = document.querySelector('#project-name-input');
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === '') return;
  const newProject = project(projectName);
  myProjects.push(newProject);
  saveAndRender();
  resetProjectForm();
}

export function addTodoToProject(todo) {
  const selectedProject = myProjects.find(
    (project) => project.id === selectedProjectId,
  );
  selectedProject.todos.push(todo);
}

export function deleteTodoFromProject(todoId) {
  const selectedProject = myProjects.find(
    (project) => project.id === selectedProjectId,
  );
  selectedProject.todos = selectedProject.todos.filter(
    (todo) => todo.id !== todoId,
  );
  saveAndRender();
}

export function deleteProject(projectId) {
  myProjects = myProjects.filter((project) => project.id !== projectId);
  saveAndRender();
}

export function changeSelectedProject(projectId) {
  selectedProjectId = projectId;
  saveAndRender();
}

export function noSelectedProject() {
  selectedProjectId = null;
}
