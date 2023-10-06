const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  const formData = new FormData(registerForm);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  if (formDataObject.email === "" || formDataObject.password === "") {
    return alert("Всі поля мають бути заповненими!");
  } else {
    console.log(formDataObject);
  }

  form.reset();
}
