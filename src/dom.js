import { getProjects, getSelectedProjectId, save } from "./projects";

export function displayTaskForm() {
    document.getElementById("add-todo-form-container").style.display = '';
}
export function resetTodoForm() {
    document.getElementById("add-todo-form").reset();
    document.getElementById("add-todo-form-container").style.display = 'none';
}

export function displayProjectForm() {
    document.getElementById("new-project-form-container").style.display = '';
}

export function resetProjectForm() {
    document.getElementById("new-project-form").reset();
    document.getElementById("new-project-form-container").style.display = 'none';
}

export function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

const projectsContainer = document.querySelector('#projects-list');

export function renderProjects() {
    getProjects().forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add("project-name");
        projectElement.textContent = project.name;
        if (project.id === getSelectedProjectId()) {
            projectElement.classList.add("selected-project")
        }

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add("delete-project-button");
        deleteProjectButton.textContent = "X";

        projectElement.appendChild(deleteProjectButton);
        projectsContainer.appendChild(projectElement);

    });
}

const todosContainer = document.querySelector('.todos-container');
const projectHeader = document.querySelector('.project-header');
const todosList = document.querySelector('.todos-list');


export function render() {
    clearElement(projectsContainer);
    renderProjects();
    const selectedProject = getProjects().find(project => project.id === getSelectedProjectId());
    if (!selectedProject) {
        todosContainer.style.display = 'none';
    } else {
        todosContainer.style.display = '';
        projectHeader.textContent = selectedProject.name;
        // clearElement(todosContainer);
    }
};

export function saveAndRender() {
    save();
    render();   
}