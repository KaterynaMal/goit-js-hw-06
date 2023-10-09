const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(registerForm);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value.trim();
  });

  if (formDataObject.email === "" || formDataObject.password === "") {
    return alert("Всі поля мають бути заповненими!");
  } else {
    console.log(formDataObject);
  }

  registerForm.reset();
}
