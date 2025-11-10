export const tasks = [
    
];

export function createTask () {
    /**
     * @type {HTMLInputElement}
    */

    const title = document.getElementById("title");
    const titleValue = title.value;
    
    const description = document.getElementById("description");
    const descriptionValue = description.value;

    const task ={id:Date.now,title:titleValue,description:descriptionValue,checked:false}

    tasks.push(task);
    createTaskContainer(task);
    hideAddTaskModal();
        
    
}

export function createTaskContainer(task){
    const taskE = document.createElement("div");
    taskE.className = "task";
    taskE.id = "task_" + task.id;

    const taskInfoE = document.createElement("div");
    taskInfoE.className = "task_info";

    const inputE = document.createElement("input");
    inputE.type = "checkbox";
    taskInfoE.appendChild(inputE);

    const pE = document.createElement("p");
    pE.textContent= task.title;
    taskInfoE.appendChild(pE);

    taskE.appendChild(taskInfoE);

    const infoButtonE = document.createElement("button");
    infoButtonE.className = "info_button";
    
    const img = document.createElement("img");
    img.src = "assets/right_arrow.svg";
    infoButtonE.appendChild(img);
    
    taskE.appendChild(infoButtonE);


    document.getElementById("task_container").appendChild(taskE);
}
export function hideAddTaskModal(){
    document.getElementById("add_task_modal").className = "hidden";
   
}
export function showAddTaskModal(){
    document.getElementById("add_task_modal").classList.remove("hidden");

}