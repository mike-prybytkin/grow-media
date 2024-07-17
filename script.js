(() => {
  const form = document.querySelector('.business-form')
  const phoneInput = document.querySelector('.business-form .form-control[type="tel"]');
  const toast = new bootstrap.Toast(document.querySelector('#liveToast'))
  const fadeElements = document.querySelectorAll('.fade-out');

  formHandler(form)

  function formHandler (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      if (form.checkValidity()) {
        const data = new FormData(form)
        submitSuccess(data);
        return
      } 
      form.classList.add('was-validated')
    }, false)
  }

  const submitSuccess = (formData) => {
    console.log(formData)
    form.reset();
    form.classList.remove('was-validated')
    toast.show()
    mask.updateValue()
  }

  const mask = new IMask(phoneInput, {
    mask: '+{375}(00)000-00-00',
  })
})()
