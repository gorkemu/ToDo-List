import { clearElement, resetProjectForm } from "./dom";

const projectsContainer = document.querySelector('#projects-list');
const LOCAL_STORAGE_PROJECT_KEY = 'todo.projects';
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = 'todo.selectedProjectId';

let myProjects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY);

export function renderProjects() {
    clearElement(projectsContainer);
    myProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.dataset.projectId = project.id;
        projectElement.classList.add("project-name");
        projectElement.textContent = project.name;
        if (project.id === selectedProjectId) {
            projectElement.classList.add("selected-project")
        }

        const deleteProjectButton = document.createElement('button');
        deleteProjectButton.classList.add("delete-project-button");
        deleteProjectButton.textContent = "X";

        projectElement.appendChild(deleteProjectButton);
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
    saveAndRender();
    resetProjectForm();
}

export function save() {
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(myProjects));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY, selectedProjectId);
}

export function saveAndRender() {
    save();
    renderProjects();
}

export function selectProject(e) {
    if (e.target.classList.contains('project-name')) {
        selectedProjectId = e.target.dataset.projectId;
        saveAndRender();
    }
}

export function deleteProject(e) {
    if (e.target.classList.contains('delete-project-button')) {
    myProjects = myProjects.filter(project => project.id !== e.target.parentElement.dataset.projectId);
    saveAndRender();
    }
}