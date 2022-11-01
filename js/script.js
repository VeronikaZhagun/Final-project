(function () {
  if (document.querySelector('.request-form')) {
    let form = document.querySelector('.request-form');
    let fields = form.querySelectorAll('.request-field');

    form.addEventListener('submit', function (event) {
      event.preventDefault()
      let errors = form.querySelectorAll('.error')
      for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
      }
      for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
          let error = document.createElement('div');
          error.className = 'error'
          error.style.color = 'red'
          error.innerHTML = 'Поле не было заполнено'
          form[i].parentElement.insertBefore(error, fields[i])
        }
      }
    })
  }


  let openMenu = function () {
    const iconMenu = document.querySelector('.menu-icon');
    const menu = document.querySelector('.navigation');

    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active');
    menu.classList.toggle('active');

  }

  if (document.querySelector('.menu-icon')) {
    document.querySelector('.menu-icon').addEventListener('click', openMenu);
  }
})();