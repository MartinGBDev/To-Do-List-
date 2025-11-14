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

    const task ={id:"task_" + Date.now(),title:titleValue,description:descriptionValue,checked:false}

    tasks.push(task);
    createTaskContainer(task);
    hideAddTaskModal();
    
        
    
}

export function createTaskContainer(task){
    const taskE = document.createElement("div");
    taskE.className = "task";
    taskE.id = task.id;

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
    infoButtonE.id = "button_" + taskE.id;
    
    const img = document.createElement("img");
    img.src = "assets/right_arrow.svg";
    infoButtonE.appendChild(img);

    
    taskE.appendChild(infoButtonE);
    const taskContainer = document.getElementById("task_container");
    if(tasks.length > 0){
        taskContainer.removeChild(document.getElementById("empty"));
        taskContainer.className = ""
    }
    

    
    taskContainer.appendChild(taskE);
}
export function hideAddTaskModal(){
    document.getElementById("add_task_modal").className = "hidden";
   
}
export function showAddTaskModal(){
    document.getElementById("add_task_modal").classList.remove("hidden");

}
export function refreshCheckedTasks(){
    const taskContainer = document.getElementById("task_container");
    taskContainer.innerHTML = "";
    const taskChecked = tasks.filter(task => task.checked === true);
    for(let task of taskChecked)
        createTaskContainer(task);
}
export function loadSavedTasks(){
    if(tasks.length === 0){
        const p = document.createElement("p");
        p.textContent = "There is no tasks";
        p.id = "empty";
        const taskContainer = document.getElementById("task_container");
        console.log("LLega")
        taskContainer.appendChild(p);
    }
    else{
        for(let task of tasks){
            task.className = "task";
            createTaskContainer(task);
            
        }

    }
}
export function refreshUncheckedTasks(){
     const taskContainer = document.getElementById("task_container");
     taskContainer.innerHTML = "";
     const taskUnchecked = tasks.filter(task => task.checked === false);
     for(let task of taskUnchecked)
        createTaskContainer(task);
}
export function refreshAllTasks(){
    const taskContainer = document.getElementById("task_container");
     taskContainer.innerHTML = "";
     for(let task of tasks)
        createTaskContainer(task);
}