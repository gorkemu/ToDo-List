import { clearElement, resetProjectForm } from "./dom";

const projectsContainer = document.querySelector('#projects-list');

let myProjects = [];

export function renderProjects() {
    clearElement(projectsContainer);
    myProjects.forEach(project => {
        const projectElement = document.createElement('li');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add("project-name");
        projectElement.textContent = project.name;
        projectsContainer.appendChild(projectElement);
    });
};

const project = (name) => {

    return { id: Date.now().toString(), name: name, todos: [] }
};

export function createProject() {
    const newProjectInput = document.querySelector('#project-name-input');
    const projectName = newProjectInput.value;
    if (projectName == null || projectName === '') return;
    const newProject = project(projectName);
    myProjects.push(newProject);
    renderProjects();
    resetProjectForm();
}