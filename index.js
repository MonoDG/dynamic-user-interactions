const dropdownButton = document.querySelector("#dropdown");
const dropdownContentDiv = document.querySelector("#dropdown-content");

const anotherDropdownButton = document.querySelector("#dropdown2");
const anotherDropdownContentDiv = document.querySelector("#dropdown-content2");

dropdownButton.addEventListener("click", () => {
  toggleVisibility(dropdownButton, dropdownContentDiv);
});

anotherDropdownButton.addEventListener("click", () => {
  toggleVisibility(anotherDropdownButton, anotherDropdownContentDiv);
});

function toggleButtonText(button, content) {
  button.textContent = content.classList.contains("hidden")
    ? "Collapse -"
    : "Expand +";
}

function toggleVisibility(button, content) {
  toggleButtonText(button, content);
  content.classList.toggle("hidden");
}
