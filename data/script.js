//ВСЕ КНОПКИ И ПОЛЯ
const todoInput = document.querySelector(".form__input");
const todoAddBtn = document.querySelector(".add");
const deleteDoneBtn = document.querySelector(".delete_done");
const deleteAllBtn = document.querySelector(".delete_all");
const todoDeleteBtn = document.querySelector(".todo__delete");
let todosArray = [];

//РОДИТЕЛЬСКИЕ ЭЛЕМЕНТЫ ДЛЯ ЗАПОЛНЕНИЯ
const todoList = document.querySelector(".list");
const deleteField = document.querySelector(".delete_field");
const form = document.querySelector(".add_field");

//ФОРМИРОВАНИЕ И КОРРЕКТИРОВКА МАССИВА ТУДУШЕК
function addTodosArray() {
  let value = todoInput.value;
  if (todoInput.value !== "") {
    todosArray.push({
      id: Date.now(),
      text: value,
      done: false,
    });

    // РЕАКЦИЯ НА ПОПЫТКУ ВВОДА ПУСТОЙ СТРОКИ
  } else {
    todoAddBtn.style.background = "#F23900";
    todoInput.style.boxShadow = "0px 0px 15px #F23900";
    function fixBack() {
      todoAddBtn.style.background = "#272829";
      todoInput.style.boxShadow = "none";
    }
    setTimeout(fixBack, 200);
  }
  drawTodosArray();
}

//УДАЛЕНИЕ ВСЕХ ТУДУШЕК
function clearAll() {
  deleteField.style.display = "none";
  todoList.style.display = "none";
  // todoInput.value = "";
  // document.querySelectorAll(".list__item").forEach((el) => el.remove());
  todosArray = [];
  drawTodosArray();
}

function clearDone() {}

function deleteTodo() {}

//ОТРИСОВКА ОДНОЙ ТУДУШКИ
function drawTodo(item) {
  {
    if (todosArray.length) {
      deleteField.style.display = "flex";
      todoList.style.display = "block";
      const newString = document.createElement("li");
      newString.className = "list__item";
      const todoLabel = document.createElement("label");
      todoLabel.className = ".todo";
      const todoDoneCheck = document.createElement("input");
      todoDoneCheck.type = "checkbox";
      todoDoneCheck.className = "todo__done";
      todoDoneCheck.checked = item.done;
      const todoName = document.createElement("span");
      todoName.className = "todo__name";
      todoName.textContent = item.text;
      const todoDeleteBtn = document.createElement("button");
      todoDeleteBtn.className = "todo__delete";
      todoDeleteBtn.textContent = "❌";
      todoLabel.append(todoDoneCheck);
      todoLabel.append(todoName);
      newString.append(todoLabel);
      newString.append(todoDeleteBtn);
      todoInput.value = "";
      todoInput.focus();
      return newString;
      // РЕАКИЯ НА ПОПЫТКУ ВВЕСТИ ПУСТУЮ СТРОКУ
    } else {
      todoAddBtn.style.background = "#F23900";
      todoInput.style.boxShadow = "0px 0px 15px #F23900";
      function fixBack() {
        todoAddBtn.style.background = "#272829";
        todoInput.style.boxShadow = "none";
      }
      setTimeout(fixBack, 200);
    }
  }
  // const todoDeleteBtn = document.querySelector(".todo__delete");
  // todoDeleteBtn.addEventListener("click", deleteTodo);
}

//ОТРИСОВКА ВСЕХ ТУДУШЕК ПО СФОРМИРОВАННОМУ МАССИВУ
const drawTodosArray = () => {
  todoList.innerHTML = "";
  todosArray.forEach((item) => {
    todoList.prepend(drawTodo(item));
  });
  console.log(todosArray);
  console.log("drawTodosArray");
};

//ОТКЛЮЧЕНИЕ БАЗОВОГО ПОВЕДЕНИЯ ЭЛЕМЕНТОВ ФОРМЫ
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
});

// drawTodosArray();

//ПРОСЛУШКА ВСЕХ ЭЛЕМЕНТОВ
todoAddBtn.addEventListener("click", addTodosArray); // Отрисовка
deleteAllBtn.addEventListener("click", clearAll); // удалить все
deleteDoneBtn.addEventListener("click", clearDone); // удалить выполненные
