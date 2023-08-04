const modal = document.getElementById('modal');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');

const alertElement = document.getElementById('alert');


/*
function openModal(){
    modal.style.display='flex';
}

function closeModal(){
    modal.style.display='none';
    clearFields();
}*/

function toggleModal(){
    modal.classList.toggle('modal-visible');
}

function clearFields(){
    inputDate.value='';
    inputDescription.value='';
}

function closeAlert() {
    setTimeout(() => {
        alertElement.style.display = 'none';
    }, 3000);
}

btnCreateTask.addEventListener('click',createTask)

function createTask(e){
    e.preventDefault();

    //obriga a preencher todos os campos
    if(!inputDescription.value || !inputDate.value){
       // alert('Preencha todos os campos');
        alertElement.style.display = 'block';
        closeAlert();
        return;
    }

    const newTask = {
        description: inputDescription.value,
        date: new Date(inputDate.value).toLocaleDateString('pt-BR' , { timeZone: 'UTC'}),
        id: Math.floor(Math.random() * 10000)
    }

    //const allTasks = loadTasks();
    const allTasks = getTasks();


    //localStorage.setItem('@GoTasks',JSON.stringify([ ...allTasks, newTask]));
    setTasks([ ...allTasks, newTask]);

    reload();
    toggleModal();
    clearFields();
}