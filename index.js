const addButton = document.getElementById("addButton");
const resetButton = document.getElementById("resetButton");
const text = document.getElementById("text");
const paragraph = document.getElementById("paragraph");

addButton.addEventListener("click", () => {
  const newText = text.value;
  if (newText.trim() !== "") {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = newText;
    paragraph.appendChild(newParagraph);
    text.value = "";
  }
});

resetButton.addEventListener("click", () => {
  paragraph.innerHTML = ""; // Remove all the added paragraphs
  text.value = ""; // Clear the input field
});
