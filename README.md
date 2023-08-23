
This is a simple HTML, CSS, and JavaScript code that allows a user to add paragraphs to a webpage. 

Hosted Link : 

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
    <div id="paragraph"></div>
</div>
    <script src="index.js"></script>
</body>
</html>
```

#### JavaScript

The JavaScript code adds a new paragraph to the webpage when the "Add" button is clicked and "Reset" button is clicked
const color = document.getElementById("color");
const backgroundcolor = document.getElementById("backgroundcolor");
const padding = document.getElementById("padding ");
const fontSize = document.getElementById("fontSize ");
const fontWeight = document.getElementById("fontWeight ");
const targetDiv = document.getElementById("targetDiv");

color.addEventListener("change", () => {
  targetDiv.style.color = color.value;
});

backgroundcolor.addEventListener("change", () => {
  targetDiv.style.backgroundColor = backgroundcolor.value;
});

padding.addEventListener("change", () => {
  targetDiv.style.padding = padding.value;
});

fontSize.addEventListener("change", () => {
  targetDiv.style.fontSize = fontSize.value;
});

fontWeight.addEventListener("change", () => {
  targetDiv.style.fontWeight = fontWeight.value;
});


```javascript
