const input = document.querySelector("#validation-input");
const expectedLength = parseInt(input.getAttribute("data-length"));

const updateValidClass = () => {
  const inputValue = input.value.length;

  if (inputValue === expectedLength) {
    updateClassGreenColor("valid", "invalid");
  } else {
    updateClassRedColor("invalid", "valid");
  }
};

function updateClassGreenColor(valid, invalid) {
  input.classList.remove("invalid");
  input.classList.add("valid");
}

function updateClassRedColor(valid, invalid) {
  input.classList.remove("valid");
  input.classList.add("invalid");
}

input.addEventListener("blur", updateValidClass);
