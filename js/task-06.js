const input = document.querySelector("#validation-input");
const expectedLength = parseInt(input.getAttribute("data-length"));

const updateValidClass = () => {
  const inputValue = input.value.length;

  if (inputValue === expectedLength) {
    updateClassColor("valid", "invalid");
  } else {
    updateClassColor("invalid", "valid");
  }
};

function updateClassColor(a, b) {
  input.classList.add(a);
  input.classList.remove(b);
}

input.addEventListener("blur", updateValidClass);
