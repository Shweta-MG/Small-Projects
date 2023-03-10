//Listening to submit event
const toDoForm = document.querySelector('#toDoForm');
const submitToDo = (event) => {
    event.preventDefault();
    saveToDo();
    renderToDo();
}

toDoForm.addEventListener('submit', submitToDo);

//Save Todo

const toDoInupt = document.querySelector('#newtodo');
let toDos = [];
const saveToDo = () => {
    let toDoValue = toDoInupt.value;

    //checking on empty value using (toDoValue === '')

    //checking for duplicate todo's
    const toDoDuplicate = toDos.some((toDo1) => toDo1.value.toUpperCase() === toDoValue.toUpperCase());



    if (toDoValue === '') {
        alert('Todo\'s input is empty');
        
    } else if (toDoDuplicate) { 
        alert('Todo\'s already present!');

    } else {
        const todo = {
            value: toDoValue,
            color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
            checked: false,
        };
        toDos.push(todo);

        //empying input field after event 
        toDoInupt.value = '';
    }

    console.log(toDos);
};

//Render ToDos
const toDoListEl = document.querySelector('.toDoList');
const renderToDo = () => {
    //clear previous entered values before re-render   
    toDoListEl.innerHTML = '';

    //rendering the todos
    toDos.forEach((todo, index) => {
        toDoListEl.innerHTML += `
        <div class="toDo" id="${index}">
            <i class="bi ${todo.checked ? 'bi - check - circle - fill' : 'bi - circle'}" style = "color : ${todo.color}">
            </i>
            <p class="checked">${todo.value}</p>
            <i class="bi bi-pencil-square"></i>
            <i class="bi bi-trash-fill"></i>
        </div>`;
    });
};

//Listen events for all todos

const allToDoEvent = (event) => {
    const target = event.target;
    const parentElement = target.parentNode;

    //limiting clicks on outside toDo div
    if (parentElement.className !== 'toDo') return;
    
    const toDoId = Number(parentElement.id);

}

toDoListEl.addEventListener('click', allToDoEvent);