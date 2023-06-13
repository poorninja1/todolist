const dom = {
  new: document.getElementById('new'),
  add: document.getElementById('add'),
  tasks2: document.getElementById('tasks2'),
  count: document.getElementById('count'),
};

let tasks2 = [];

// Проверяем, есть ли сохраненные задачи в localStorage
const savedTasks = localStorage.getItem('tasks2');
if (savedTasks) {
  tasks2 = JSON.parse(savedTasks);
  tasksRender(tasks2);
}

// Добавляем задачу
dom.add.onclick = () => {
  const newTaskText = dom.new.value;
  if (newTaskText && isNotHaveTask(newTaskText, tasks2)) {
    addTask(newTaskText, tasks2);
    dom.new.value = "";
    tasksRender(tasks2);
    saveTasksToLocalStorage(tasks2);
    openModal(newTaskText);
  }
};

// Функция добавления задачи
function addTask(text, list2) {
  const timestamp = Date.now();
  const task2 = {
    id: timestamp,
    text,
    isComplete: false
  };
  list2.push(task2);
}

// Проверка существования задачи в массиве
function isNotHaveTask(text, list2) {
  let isNotHave = true;
  list2.forEach((task2) => {
    if (task2.text === text) {
      alert("Задача уже существует.");
      isNotHave = false;
    }
  });
  return isNotHave;
}

// Функция вывода списка задач на экран
function tasksRender(list2) {
  let htmlList = '';
  list2.forEach((task2) => {
    const cls = task2.isComplete ? 'todo__task todo__task_complete' : 'todo__task';
    const checked = task2.isComplete ? 'checked' : '';

    const taskHtml = `
      <div id="${task2.id}" class="${cls}">
        <label class="todo__checkbox">
          <input type="checkbox" ${checked}>
          <div class="todo__checkbox-div"></div>
        </label>
        <div class="todo__task-text">${task2.text}</div>
        <div class="todo__task-del">-</div>
      </div>
    `;
    htmlList += taskHtml;
  });

  dom.tasks2.innerHTML = htmlList;
  renderTasksCount(list2);
}

// Отслеживаем клик по чекбоксу и удаление задачи
dom.tasks2.onclick = (event) => {
  const target = event.target;
  const isCheckboxEl = target.classList.contains('todo__checkbox-div');
  const isDeleteEl = target.classList.contains('todo__task-del');

  if (isCheckboxEl) {
    const task2 = target.parentElement.parentElement;
    const taskId = task2.getAttribute('id');
    changeTaskStatus(taskId, tasks2);
    tasksRender(tasks2);
    saveTasksToLocalStorage(tasks2);
  }
  if (isDeleteEl) {
    const task2 = target.parentElement;
    const taskId = task2.getAttribute('id');
    deleteTask(taskId, tasks2);
    tasksRender(tasks2);
    saveTasksToLocalStorage(tasks2);
  }
};

// Функция изменения статуса задачи
function changeTaskStatus(id, list2) {
  list2.forEach((task2) => {
    if (task2.id == id) {
      task2.isComplete = !task2.isComplete;
    }
  });
}

// Удаление задачи
function deleteTask(id, list2) {
  list2.forEach((task2, idx) => {
    if (task2.id == id) {
      list2.splice(idx, 1);
    }
  });
}

// Вывод количества задач
function renderTasksCount(list2) {
  dom.count.innerHTML = list2.length;
}

// Сохранение задач в localStorage
function saveTasksToLocalStorage(list2) {
  localStorage.setItem('tasks2', JSON.stringify(list2));
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