//ВСЕ КНОПКИ И ПОЛЯ
const todoInput = document.querySelector(".form__input");
const todoAddBtn = document.querySelector(".add");
const deleteDoneBtn = document.querySelector(".delete_done");
const deleteAllBtn = document.querySelector(".delete_all");
const todoDeleteBtn = document.querySelector(".todo__delete");

let storageArray = JSON.parse(localStorage.getItem("todosArray")) ?? [];
let todosArray = storageArray;

//РОДИТЕЛЬСКИЕ ЭЛЕМЕНТЫ ДЛЯ ЗАПОЛНЕНИЯ
const todoList = document.querySelector(".list");
const deleteField = document.querySelector(".delete_field");
const form = document.querySelector(".add_field");

//ФОРМИРОВАНИЕ МАССИВА ТУДУШЕК
const addTodosArray = () => {
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
    const lightOff = () => {
      todoAddBtn.style.background = "#272829";
      todoInput.style.boxShadow = "none";
    };
    setTimeout(lightOff, 200);
  }
  drawTodosArray();
};

//КОРРЕКТИРОВКА МАССИВА ТУДУШЕК ПО СОСТОЯНИЮ ЧЕКБОКСА
const switchDone = (id) => {
  todosArray = todosArray.map((item) => {
    if (id === item.id) {
      item = {
        ...item,
        done: !item.done,
      };
      return item;
    } else {
      return item;
    }
  });
  drawTodosArray();
};

//УДАЛЕНИЕ ВСЕХ ТУДУШЕК
const deleteAll = () => {
  todosArray = [];
  drawTodosArray();
};

//УДАЛЕНИЕ ОДНОЙ ТУДУШКИ
const deleteTodo = (id) => {
  todosArray = todosArray.filter((item) => item.id !== id);
  drawTodosArray();
};

//УДАЛЕНИЕ ВЫБРАННЫХ ТУДУШЕК
const deleteDone = (done) => {
  todosArray = todosArray.filter((item) => item.done === false);
  drawTodosArray();
};

//ОТРИСОВКА ОДНОЙ ТУДУШКИ
const drawTodo = (item) => {
  {
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
    //ОБРАБОТКА КНОПКИ УДАЛЕНИЯ ОДНОЙ ТУДУШКИ
    todoDeleteBtn.addEventListener("click", () => deleteTodo(item.id));
    //ОБРАБОТКА МАССИВА ТУДУШЕК ПРИ НАЖАТИИ НА CHECKBOX
    todoDoneCheck.addEventListener("change", () => switchDone(item.id));
    return newString;
  }
};

//ОТРИСОВКА ВСЕХ ТУДУШЕК ПО СФОРМИРОВАННОМУ МАССИВУ
const drawTodosArray = () => {
  //ЕСЛИ МАССИВ ТУДУШЕК ПУСТ - УБИРАЕМ ЛИШНИЕ ПОЛЯ
  if (!todosArray.length) {
    deleteField.style.display = "none";
    todoList.style.display = "none";
  }
  todoList.innerHTML = "";
  localStorage.setItem("todosArray", JSON.stringify(todosArray));
  todosArray.forEach((obj) => {
    todoList.prepend(drawTodo(obj));
    console.log(todosArray);
  });
};

//ОТКЛЮЧЕНИЕ БАЗОВОГО ПОВЕДЕНИЯ ЭЛЕМЕНТОВ ФОРМЫ
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
});

drawTodosArray();

//ПРОСЛУШКА ВСЕХ ЭЛЕМЕНТОВ
todoAddBtn.addEventListener("click", addTodosArray); // Отрисовка
deleteAllBtn.addEventListener("click", deleteAll); // удалить все
deleteDoneBtn.addEventListener("click", deleteDone); // удалить выполненные
