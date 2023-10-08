const input = document.querySelector("#validation-input");
const expectedLength = input.getAttribute("data-length");

const updateValidClass = () => {
  const inputValue = input.value.length;

  if (inputValue == expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", updateValidClass);
