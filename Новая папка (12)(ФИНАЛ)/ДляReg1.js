console.log('Hello')

$(document).ready(function() {
    const form = $('.form');
    const saveButton = $('#save-btn');
  
    saveButton.on('click', function(event) {
      event.preventDefault();
  
      const emailInput = $('#email');
      const passwordInput = $('#password');
      const password2Input = $('#password2');

  
      const email = emailInput.val().trim();
      const password = passwordInput.val().trim();
      const password2 = password2Input.val().trim();

  
      console.log('Логин: ', email);
      console.log('Пароль: ', password);
      console.log('Пароль: ', password2);

      const formData2 = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,

        // и т.д.
      };
      
      // Сохраняем данные в LocalStorage
      localStorage.setItem('formData2', JSON.stringify(formData2));

      if (!email || password!=password2){
     
        // Создаем модальное окно
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
        image.src = 'image_311.png';
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
      } else {
        // Перенаправляем пользователя на случайную страницу
      window.location.href = 'reg1.html';
      }

      emailInput.val('');
      passwordInput.val('');
      password2Input.val('');

    });
  });
  
  
  