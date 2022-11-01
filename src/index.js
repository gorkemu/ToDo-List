import { cancelTask, displayForm } from './dom';

const eventListeners = (function() {

    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.addEventListener("click", displayForm);

    const cancelButton = document.querySelector(".cancel-button");
    cancelButton.addEventListener("click", cancelTask);
    
})();