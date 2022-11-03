import { cancelTask, displayForm } from './dom';
import { addTask } from './todo';

const eventListeners = (function() {

    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.addEventListener("click", displayForm);

    const cancelButton = document.querySelector(".cancel-button");
    cancelButton.addEventListener("click", cancelTask);

    const addButton = document.querySelector(".add-button");
    addButton.addEventListener("click", addTask);

    const deleteTaskButton = document.querySelectorAll(".delete-task-button");
    
    const editTaskButton = document.querySelectorAll(".edit-task-button");
})();