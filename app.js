
import { createTask, hideAddTaskModal, loadSavedTasks, refreshAllTasks, refreshCheckedTasks, refreshUncheckedTasks, showAddTaskModal, tasks } from "./todo.js";
document.body.onload = () => {
    loadSavedTasks()
    const addButton = document.getElementById("add_task_button");
    addButton.addEventListener("click",showAddTaskModal);

    const cancelButton = document.getElementById("cancel_button");
    cancelButton.addEventListener("click",hideAddTaskModal);

    const acceptButton = document.getElementById("accept_button");
    acceptButton.addEventListener("click",createTask);

    const checkedButton = document.getElementById("checked_tasks_button");
    checkedButton.addEventListener("click",refreshCheckedTasks);

    const uncheckedButton = document.getElementById("unchecked_tasks_button");
    uncheckedButton.addEventListener("click",refreshUncheckedTasks);

    const menuButton = document.getElementById("menu_button");
    menuButton.addEventListener("click",refreshAllTasks);
    
        


    
};