import { createTask, hideAddTaskModal, showAddTaskModal } from "./todo.js";
document.body.onload = () => {
    
    const addButton = document.getElementById("add_task_button");
    addButton.addEventListener("click",showAddTaskModal);

    const cancelButton = document.getElementById("cancel_button");
    cancelButton.addEventListener("click",hideAddTaskModal);

    const acceptButton = document.getElementById("accept_button");
    acceptButton.addEventListener("click",createTask);


    
};