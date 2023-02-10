//ВСЕ КНОПКИ И ПОЛЯ
const todoInput = document.querySelector(".form__input");
const todoAddBtn = document.querySelector(".add");
const deleteDoneBtn = document.querySelector(".delete_done");
const deleteAllBtn = document.querySelector(".delete_all");
const todoDeleteBtn = document.querySelector(".todo__delete");

//РОДИТЕЛЬСКИЕ ЭЛЕМЕНТЫ ДЛЯ ЗАПОЛНЕНИЯ
const todoList = document.querySelector(".list");
const deleteField = document.querySelector(".delete_field");
const form = document.querySelector(".add_field");

//ФУНКЦИИ
function clearAll() {
  deleteField.style.display = "none";
  todoList.style.display = "none";
  todoInput.value = "";
  document.querySelectorAll(".list__item").forEach((el) => el.remove());
}

function clearDone() {}
function deleteTodo() {}

function createString() {
  {
    if (todoInput.value !== "") {
      deleteField.style.display = "flex";
      todoList.style.display = "block";
      const newString = document.createElement("li");
      newString.className = "list__item";

      //
      // второй способ
      const todoLabel = document.createElement("label");
      todoLabel.className = ".todo";
      const todoDoneCheck = document.createElement("input");
      todoDoneCheck.type = "checkbox";
      todoDoneCheck.className = "todo__done";
      const todoName = document.createElement("span");
      todoName.className = "todo__name";
      todoName.textContent = todoInput.value;
      const todoDeleteBtn = document.createElement("button");
      todoDeleteBtn.className = "todo__delete";
      todoDeleteBtn.textContent = "❌";
      todoLabel.append(todoDoneCheck);
      todoLabel.append(todoName);
      newString.append(todoLabel);
      newString.append(todoDeleteBtn);
      //
      // первый способ
      // newString.innerHTML = `
      //         <label class="todo">
      //           <input type="checkbox" class="todo__done" />
      //           <span class="todo__name">
      //             ${todoInput.value}
      //           </span>
      //         </label>
      //         <button class="todo__delete">❌</button>`;
      todoList.append(newString);
      todoInput.value = "";
    } else {
      todoAddBtn.style.background = "#F23900";
      todoInput.style.boxShadow = "0px 0px 15px #F23900";
      function fixBack() {
        console.log("her");
        todoAddBtn.style.background = "#272829";
        todoInput.style.boxShadow = "none";
      }
      setTimeout(fixBack, 200);
    }
  }
}

//ОТКЛЮЧЕНИЕ БАЗОВОГО ПОВЕДЕНИЯ ЭЛЕМЕНТОВ ФОРМЫ
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
});

//ПРОСЛУШКА ВСЕХ ЭЛЕМЕНТОВ
todoAddBtn.addEventListener("click", createString);
deleteAllBtn.addEventListener("click", clearAll);
deleteDoneBtn.addEventListener("click", clearDone);
todoDeleteBtn.addEventListener("click", deleteTodo);
