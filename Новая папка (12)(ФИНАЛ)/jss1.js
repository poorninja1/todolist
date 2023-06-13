$(document).ready(function() {
    var form1 = $('.form');
    var saveButton1 = $('#save-btn');
  
    saveButton1.on('click', function(event) {
      event.preventDefault();
  
       nameInput = $('#name');
       surnameInput = $('#surname');
       patronymicInput = $('#patronymic');
       phoneInput = $('#phone');
       birthdateInput = $('#birthdate');
  
      name = nameInput.val().trim();
      surname = surnameInput.val().trim();
      patronymic = patronymicInput.val().trim();
      phone = phoneInput.val().trim();
      birthdate = birthdateInput.val().trim();
  
      console.log('Имя: ', name);
      console.log('Фамилия: ', surname);
      console.log('Отчество: ', patronymic);
      console.log('Телефон: ', phone);
      console.log('Дата рождения: ', birthdate);
      
     
  // Получаем данные из формы
  const formData = {
    name: document.getElementById('name').value,
    surname: document.getElementById('surname').value,
    patronymic: document.getElementById('patronymic').value,
    phone: document.getElementById('phone').value,
    birthdate: document.getElementById('birthdate').value,
  
    // и т.д.
  };
  
  // Сохраняем данные в LocalStorage
  localStorage.setItem('formData', JSON.stringify(formData));
  
  var phonePattern = /^8\d{10}$/;
  
      
      if (!name || !surname || !patronymic || !phone || !birthdate){
       
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
      } 
       else if (!phonePattern.test(phone)) {
        const modaln = document.createElement('div');
        modaln.style.position = 'fixed';
        modaln.style.top = '50%';
        modaln.style.left = '50%';
        modaln.style.transform = 'translate(-50%, -50%)';
        modaln.style.width = '300px';
        modaln.style.height = '300px';
        modaln.style.backgroundColor = '#fff';
        modaln.style.borderRadius = '10px';
        modaln.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        modaln.style.zIndex = '9999';
    
        // Затемняем задний фон
        const backdropn = document.createElement('div');
        backdropn.style.position = 'fixed';
        backdropn.style.top = '0';
        backdropn.style.left = '0';
        backdropn.style.width = '100%';
        backdropn.style.height = '100%';
        backdropn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        backdropn.style.zIndex = '9998';
        backdropn.addEventListener('click', () => {
          document.body.removeChild(modaln);
          document.body.removeChild(backdropn);
        });
  
        // Создаем картинку внутри модального окна
        const imagen = document.createElement('img');
        imagen.src = 'image_4.png';
        imagen.style.display = 'block';
        imagen.style.width = '100%';
        imagen.style.height = 'auto';
        imagen.style.margin = 'auto';
        imagen.style.marginTop = '50px';
  
        // Добавляем картинку в модальное окно
        modaln.appendChild(imagen);
  
        // Добавляем модальное окно и задний фон на страницу
        document.body.appendChild(backdropn);
        document.body.appendChild(modaln)
      }
      else {
        // Перенаправляем пользователя на случайную страницу
       window.location.href = 'ТуДуЛист.html';
        
      }
    });
  });
  
  
  