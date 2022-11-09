import { displayProjectForm, displayTaskForm, render, resetProjectForm, resetTodoForm } from './dom';
import { changeSelectedProject, createProject, deleteProject, getSelectedProjectId, noSelectedProject } from './projects';
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
   
    const projectsContainer = document.querySelector('#projects-list');
    projectsContainer.addEventListener("click", e => {
        // Change Selected Project
        if (e.target.classList.contains('project-name')) {
            changeSelectedProject(e.target.dataset.projectId);
        }
        // Delete Project
        else if (e.target.classList.contains('delete-project-button')) {
            deleteProject(e.target.parentElement.dataset.projectId);
            
            if(e.target.parentElement.dataset.projectId === getSelectedProjectId()) {
                noSelectedProject();
            }
        }
    });
  
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

render();