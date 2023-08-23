
This is a simple HTML, CSS, and JavaScript code that allows a user to add paragraphs to a webpage. 

Hosted Link : https://vineet9086628513.github.io/9home/

### Step-by-Step Explanation

#### HTML 

The HTML code creates a simple webpage with a text input, a button, and a div to hold the paragraphs.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div>
    <input type="text" id="text">
    <button id="addButton">Add</button>
    <button id="resetButton">Reset</button>
    <div id="paragraph"></div>
</div>
    <script src="index.js"></script>
</body>
</html>
```

#### JavaScript

The JavaScript code adds a new paragraph to the webpage when the "Add" button is clicked and "Reset" button is clicked
```JavaScript
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
```


