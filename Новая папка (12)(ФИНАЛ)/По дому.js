const dom = {
  new: document.getElementById('new'),
  add: document.getElementById('add'),
  tasks1: document.getElementById('tasks1'),
  count: document.getElementById('count'),
};

let tasks1 = [];

// Проверяем, есть ли сохраненные задачи в localStorage
const savedTasks = localStorage.getItem('tasks1');
if (savedTasks) {
  tasks1 = JSON.parse(savedTasks);
  tasksRender(tasks1);
}

// Добавляем задачу
dom.add.onclick = () => {
  const newTaskText = dom.new.value;
  if (newTaskText && isNotHaveTask(newTaskText, tasks1)) {
    addTask(newTaskText, tasks1);
    dom.new.value = "";
    tasksRender(tasks1);
    saveTasksToLocalStorage(tasks1);
    openModal(newTaskText);
  }
};

// Функция добавления задачи
function addTask(text, list1) {
  const timestamp = Date.now();
  const task1 = {
    id: timestamp,
    text,
    isComplete: false
  };
  list1.push(task1);
}

// Проверка существования задачи в массиве
function isNotHaveTask(text, list1) {
  let isNotHave = true;
  list1.forEach((task1) => {
    if (task1.text === text) {
      alert("Задача уже существует.");
      isNotHave = false;
    }
  });
  return isNotHave;
}

// Функция вывода списка задач на экран
function tasksRender(list1) {
  let htmlList = '';
  list1.forEach((task1) => {
    const cls = task1.isComplete ? 'todo__task todo__task_complete' : 'todo__task';
    const checked = task1.isComplete ? 'checked' : '';

    const taskHtml = `
      <div id="${task1.id}" class="${cls}">
        <label class="todo__checkbox">
          <input type="checkbox" ${checked}>
          <div class="todo__checkbox-div"></div>
        </label>
        <div class="todo__task-text">${task1.text}</div>
        <div class="todo__task-del">-</div>
      </div>
    `;
    htmlList += taskHtml;
  });

  dom.tasks1.innerHTML = htmlList;
  renderTasksCount(list1);
}

// Отслеживаем клик по чекбоксу и удаление задачи
dom.tasks1.onclick = (event) => {
  const target = event.target;
  const isCheckboxEl = target.classList.contains('todo__checkbox-div');
  const isDeleteEl = target.classList.contains('todo__task-del');

  if (isCheckboxEl) {
    const task1 = target.parentElement.parentElement;
    const taskId = task1.getAttribute('id');
    changeTaskStatus(taskId, tasks1);
    tasksRender(tasks1);
    saveTasksToLocalStorage(tasks1);
  }
  if (isDeleteEl) {
    const task1 = target.parentElement;
    const taskId = task1.getAttribute('id');
    deleteTask(taskId, tasks1);
    tasksRender(tasks1);
    saveTasksToLocalStorage(tasks1);
  }
};

// Функция изменения статуса задачи
function changeTaskStatus(id, list1) {
  list1.forEach((task1) => {
    if (task1.id == id) {
      task1.isComplete = !task1.isComplete;
    }
  });
}

// Удаление задачи
function deleteTask(id, list1) {
  list1.forEach((task1, idx) => {
    if (task1.id == id) {
      list1.splice(idx, 1);
    }
  });
}

// Вывод количества задач
function renderTasksCount(list1) {
  dom.count.innerHTML = list1.length;
}

// Сохранение задач в localStorage
function saveTasksToLocalStorage(list1) {
  localStorage.setItem('tasks1', JSON.stringify(list1));
}

// Создаем функцию для открытия модального окна
function openModal(newTaskText) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const message = document.createElement('p');
  var myArray = ['ты сможешь ', 'у тебя получитья ', 'ты сумеешь ', 'я в тебя верю, ты сможешь ', "ты найдешь в себе силы, чтоб "];
var randomElement = myArray[Math.floor(Math.random() * myArray.length)];
  const two = randomElement + newTaskText;
  message.textContent = (two);

  modal.addEventListener('click', closeModal);

  modalContent.appendChild(message);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}

// Создаем функцию для закрытия модального окна
function closeModal(event) {
  const modal = document.querySelector('.modal');
  if (event.target === modal) {
    modal.remove();
  }
}
var myArray = ['ты сможешь', 'у тебя получитья', 'ты сумеешь', 'я в тебя верю, ты сможешь', "ты найдешь в себе силы, чтоб"];
var randomElement = myArray[Math.floor(Math.random() * myArray.length)];
console.log(randomElement);

var proflile = document.querySelector('.proflile');
proflile.addEventListener('click', function(proflile) {
    window.location.href = 'user.html';
  });