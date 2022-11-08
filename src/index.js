import { displayProjectForm, displayTaskForm, resetProjectForm, resetTodoForm } from './dom';
import { createProject, deleteProject, renderProjects, selectProject } from './projects';
import { addTodo } from './todos';

const eventListeners = (() => {

    const createProjectButton = document.querySelector(".create-project-button");
    createProjectButton.addEventListener("click", displayProjectForm);

    const cancelProjectButton = document.querySelector(".cancel-project-button");
    cancelProjectButton.addEventListener("click", resetProjectForm);

    const createProjectForm = document.querySelector('#new-project-form');
    createProjectForm.addEventListener('submit', e => {
        e.preventDefault();
        createProject();
    });

    // Select Project
    const projectsContainer = document.querySelector('#projects-list');
    projectsContainer.addEventListener("click", e => selectProject(e));
    
    // Delete Project
    projectsContainer.addEventListener("click", e => deleteProject(e));
  
    const createTodoButton = document.querySelector(".create-todo-button");
    createTodoButton.addEventListener("click", displayTaskForm);

    const cancelTodoButton = document.querySelector(".cancel-todo-button");
    cancelTodoButton.addEventListener("click", resetTodoForm);

    const addTodoForm = document.querySelector("#add-todo-form");
    addTodoForm.addEventListener("submit", e => {
        e.preventDefault();
        addTodo();
    });

    const deleteTodoButton = document.querySelectorAll(".delete-todo-button");
    
    const editTodoButton = document.querySelectorAll(".edit-todo-button");
})();

renderProjects();