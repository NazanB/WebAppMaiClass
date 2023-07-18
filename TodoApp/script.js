"use strict";

// Variable anlegen
const todoList = document.querySelector("#todo-list");
const inputField = document.querySelector("#textInput");
const btnadd = document.querySelector("#addButton");
const remove = document.querySelector("#buttonClear");
//fürs filtern !!!noch nicht erledigt!!!
const allBtn = document.getElementById("all");
const openBtn = document.getElementById("open");
const doneBtn = document.getElementById("done");

// ein State
let todos = {
  todo: [],
};

// im Local Storage speichern
function setTodosFToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos)); // das todos-Objekt setzen
}

// vom Local Storage abrufen
function getTodosFromLocalStorage() {
  const todoState = localStorage.getItem("todos"); // aus dem Local Storage abrufen
  if (todoState !== null) {
    todos = JSON.parse(todoState);
  }
  return todos;
}

btnadd.addEventListener("click", () => {
  const todoDescription = inputField.value.trim(); // Leerzeichen am Anfang und Ende entfernen
  if (todoDescription !== "") {
    todos.todo.push({
      description: todoDescription,
      done: false,
    });
    setTodosFToLocalStorage(); // Nach dem Hinzufügen speichern
    renderUI();
  }
});

// Der Clear-Button aktiviert und die HTML-Liste wird geleert

remove.addEventListener("click", () => {
  // Filtere nur die nicht erledigten Todos (done: false)
  todos.todo = todos.todo.filter((todoItem) => !todoItem.done);
  renderUI();
});

function renderUI() {
  // Zuerst die vorhandene Liste leeren
  todoList.innerHTML = "";

  // Das Todo-Array durchlaufen und die Elemente zur Todo-Liste hinzufügen
  todos.todo.forEach((todoItem) => {
    const newtodo = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todoItem.done;

    // Checkbox event hinzufügen
    checkbox.addEventListener("change", (event) => {
      todoItem.done = event.target.checked; // Status im Todo-Objekt aktualisieren
      setTodosFToLocalStorage(); // Nach der Änderung speichern
      renderUI(); // UI neu rendern
    });

    // Text durchgestrichen, wenn Todo als erledigt markiert ist
    if (todoItem.done) {
      newtodo.style.textDecoration = "line-through";
    }

    // Das Todo-Element zur Todo-Liste hinzufügen
    newtodo.appendChild(checkbox);
    newtodo.appendChild(document.createTextNode(todoItem.description));
    todoList.appendChild(newtodo);
  });

  // Eingabefeld leeren
  inputField.value = "";
}

// Beim Laden der Seite die Todos aus dem Local Storage abrufen und UI rendern
getTodosFromLocalStorage();
renderUI();
