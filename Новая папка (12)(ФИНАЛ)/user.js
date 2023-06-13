   // Получаем сохраненные данные из LocalStorage
   const formData = JSON.parse(localStorage.getItem('formData'));
   const formData2 = JSON.parse(localStorage.getItem('formData2'));


   // Используем данные для отображения на странице
   if (formData) {
     document.getElementById('name').textContent = formData.name;
     document.getElementById('surname').textContent = formData.surname;
     document.getElementById('patronymic').textContent = formData.patronymic;
     document.getElementById('phone').textContent = formData.phone;
     document.getElementById('birthdate').textContent = formData.birthdate;
     document.getElementById('email').textContent = formData2.email;


     // и т.д.
   }

   var home = document.querySelector('.home');
   home.addEventListener('click', function(event123) {
    window.location.href = 'ТуДуЛист.html';
  });
  var logout = document.querySelector('.logout');
  logout.addEventListener('click', function(event12345) {
    window.location.href = 'enter.html';
  });