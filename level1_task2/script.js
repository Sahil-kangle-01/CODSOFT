let display = document.getElementById("display");

// Append character to the display
function appendCharacter(char) {
    display.value += char;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (error) {
        alert("Invalid Input");
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    if (event.key.match(/[0-9+\-*/.%]/)) {
        appendCharacter(event.key);
    } else if (event.key === "Enter") {
        calculateResult();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});
