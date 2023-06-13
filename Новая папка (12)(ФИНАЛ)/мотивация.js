var submitMot = document.querySelector('.submitMot');
var myArray = ["Успех - это идти от неудачи к неудаче, не теряя энтузиазма", "Не считай дни, извлекай из них пользу", "Не ждите. Время никогда не будет подходящим", "Неисследованная жизнь не стоит того, чтобы ее жить", "Усердно работайте, мечтайте по-крупному.", "Мечтатели - это спасители мира", "Мечтатели - это спасители мира", "Измени свои мысли и ты изменишь мир", "Измени свои мысли и ты изменишь мир", " Победа - это еще не все, главное это постоянное желание побеждать", "Ум - это все. Вы становитесь тем, о чем думаете.", "Ваше время ограничено, не тратьте его на чужую жизнь"];
var isModalOpen = false;

submitMot.addEventListener('click', function() {
  if (!isModalOpen) {
    // Создание элементов модального окна
    var modall = document.createElement('div');
    modall.classList.add('modall');
  
    var form = document.createElement('form');
    form.classList.add('modall-form');
  
    var text = document.createElement('p');
    var randomElement = myArray[Math.floor(Math.random() * myArray.length)];
    text.textContent = randomElement;
  
    // Добавление элементов в модальное окно
    form.appendChild(text);
    modall.appendChild(form);
  
    // Добавление модального окна в документ
    document.body.appendChild(modall);
  
    // Установка флага открытия модального окна
    isModalOpen = true;
  
    // Закрытие модального окна при клике вне его области
    modall.addEventListener('click', function(event) {
      if (event.target === modall) {
        modall.remove();
        // Сброс флага открытия модального окна
        isModalOpen = false;
      }
    });
  }
});
