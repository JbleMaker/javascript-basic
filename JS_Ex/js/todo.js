const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const listDelete = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(listDelete.id));
  listDelete.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  const addSpan = document.createElement("span");
  addSpan.innerText = newTodo.text;
  const addButton = document.createElement("button");
  addButton.innerText = "X";
  addButton.addEventListener("click", deleteToDo);
  list.appendChild(addSpan);
  list.appendChild(addButton);
  toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
