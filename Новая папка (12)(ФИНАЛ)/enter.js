console.log('Hello')

$(document).ready(function() {
    const form = $('.form');
    const saveButton = $('#save-btn');
  
    saveButton.on('click', function(event) {
      event.preventDefault();
  
      const passwordInput = document.getElementById('password7').value;
      const emailInput = document.getElementById('email7').value;

      const savedFormData = JSON.parse(localStorage.getItem('formData2'));

      if (passwordInput == savedFormData.password && emailInput == savedFormData.email) {
        // Переменные совпадают, перенаправьте пользователя по ссылке
       window.location.href = 'user.html'; 
      } else {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.width = '300px';
        modal.style.height = '300px';
        modal.style.backgroundColor = '#fff';
        modal.style.borderRadius = '10px';
        modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        modal.style.zIndex = '9999';
    
        // Затемняем задний фон
        const backdrop = document.createElement('div');
        backdrop.style.position = 'fixed';
        backdrop.style.top = '0';
        backdrop.style.left = '0';
        backdrop.style.width = '100%';
        backdrop.style.height = '100%';
        backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        backdrop.style.zIndex = '9998';
        backdrop.addEventListener('click', () => {
          document.body.removeChild(modal);
          document.body.removeChild(backdrop);
        });
  
        // Создаем картинку внутри модального окна
        const image = document.createElement('img');
        image.src = 'image_3.png';
        image.style.display = 'block';
        image.style.width = '100%';
        image.style.height = 'auto';
        image.style.margin = 'auto';
        image.style.marginTop = '50px';
  
        // Добавляем картинку в модальное окно
        modal.appendChild(image);
  
        // Добавляем модальное окно и задний фон на страницу
        document.body.appendChild(backdrop);
        document.body.appendChild(modal);
        // Переменные не совпадают, выполните нужные действия
        // Например, показать сообщение об ошибке или предпринять другие меры
      }
      

      console.log('Логин: ', email);
      console.log('Пароль: ', password);
  
      emailInput.val('');
      passwordInput.val('');

    });
  });
  
  
  
  