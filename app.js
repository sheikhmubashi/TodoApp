//SELECTORS
const todoInput = document.querySelector(".todo-Input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//EVENT_LISTNER
todoButton.addEventListener("click", addTodo);

//FUNCTION
function addTodo (event) {
    //perevent form from sunmiting
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-items");
    todoDiv.appendChild(newTodo);
    //check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = <i class="fas fa-check"></i>
    completedButton.classList.add(complete-btn);
    todoDiv.appendChild(completedButton);
    //Chcek Trach Button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = <i class="fas fa-trash"></i>
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    //Append To List
    todoList.appendChild("todoDiv")




}