const table = document.getElementById('table-body');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');

/*
function loadTasks(){
    
    //const tasks =  JSON.parse(localStorage.getItem('@GoTasks')) || [];
    const tasks =  getTasks() || [];
    return tasks;
}*/

function updateCountTasks(){

    //const allTasks = loadTasks();
    const allTasks = getTasks();
    countTasks.innerHTML = allTasks.length;
}

function fillTable(){
    const allTasks = getTasks();
    allTasks.forEach(addTask);

    if(allTasks.length === 0) {
        loadingMessage.innerHTML = "Você não tem nenhuma tarefa!";
    }else {
        loadingMessage.innerHTML = "";
    }

    updateCountTasks();
}

function addTask(task){
    const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(task);

    table.appendChild(tr);
}

function innerHTMLTasks(task) {
    const html = `
    <td>${task.description}</td>
    <td>${task.date}</td>
    <td>
        <a href="#" onclick="removeTask(${task.id})">
            <i class="fas fa-trash"></i>
        </a>
    </td>
    `

    return html;
}

function removeTask(id){
    const allTasks = getTasks();
    const tasksFiltered = allTasks.filter(task => task.id != id);

    setTasks(tasksFiltered);
    reload();
}

function reload() {
    table.innerHTML = '';
    fillTable();
}






