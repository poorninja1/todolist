const dom = {
  new: document.getElementById('new'),
  add: document.getElementById('add'),
  tasks: document.getElementById('tasks'),
  count: document.getElementById('count'),
};

let tasks = [];

// Проверяем, есть ли сохраненные задачи в localStorage
const savedTasks = localStorage.getItem('tasks');
if (savedTasks) {
  tasks = JSON.parse(savedTasks);
  tasksRender(tasks);
}

// Добавляем задачу
dom.add.onclick = () => {
  const newTaskText = dom.new.value;
  if (newTaskText && isNotHaveTask(newTaskText, tasks)) {
    addTask(newTaskText, tasks);
    dom.new.value = "";
    tasksRender(tasks);
    saveTasksToLocalStorage(tasks);
    openModal(newTaskText);
  }
};

// Функция добавления задачи
function addTask(text, list) {
  const timestamp = Date.now();
  const task = {
    id: timestamp,
    text,
    isComplete: false
  };
  list.push(task);
}

// Проверка существования задачи в массиве
function isNotHaveTask(text, list) {
  let isNotHave = true;
  list.forEach((task) => {
    if (task.text === text) {
      alert("Задача уже существует.");
      isNotHave = false;
    }
  });
  return isNotHave;
}

// Функция вывода списка задач на экран
function tasksRender(list) {
  let htmlList = '';
  list.forEach((task) => {
    const cls = task.isComplete ? 'todo__task todo__task_complete' : 'todo__task';
    const checked = task.isComplete ? 'checked' : '';

    const taskHtml = `
      <div id="${task.id}" class="${cls}">
        <label class="todo__checkbox">
          <input type="checkbox" ${checked}>
          <div class="todo__checkbox-div"></div>
        </label>
        <div class="todo__task-text">${task.text}</div>
        <div class="todo__task-del">-</div>
      </div>
    `;
    htmlList += taskHtml;
  });

  dom.tasks.innerHTML = htmlList;
  renderTasksCount(list);
}

// Отслеживаем клик по чекбоксу и удаление задачи
dom.tasks.onclick = (event) => {
  const target = event.target;
  const isCheckboxEl = target.classList.contains('todo__checkbox-div');
  const isDeleteEl = target.classList.contains('todo__task-del');

  if (isCheckboxEl) {
    const task = target.parentElement.parentElement;
    const taskId = task.getAttribute('id');
    changeTaskStatus(taskId, tasks);
    tasksRender(tasks);
    saveTasksToLocalStorage(tasks);
  }
  if (isDeleteEl) {
    const task = target.parentElement;
    const taskId = task.getAttribute('id');
    deleteTask(taskId, tasks);
    tasksRender(tasks);
    saveTasksToLocalStorage(tasks);
  }
};

// Функция изменения статуса задачи
function changeTaskStatus(id, list) {
  list.forEach((task) => {
    if (task.id == id) {
      task.isComplete = !task.isComplete;
    }
  });
}

// Удаление задачи
function deleteTask(id, list) {
  list.forEach((task, idx) => {
    if (task.id == id) {
      list.splice(idx, 1);
    }
  });
}

// Вывод количества задач
function renderTasksCount(list) {
  dom.count.innerHTML = list.length;
}

// Сохранение задач в localStorage
function saveTasksToLocalStorage(list) {
  localStorage.setItem('tasks', JSON.stringify(list));
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