var textArray = ["bienvenido", "welcome", "أهلا بك", "환영", "ようこそ", "добро пожаловать", "välkommen",
    "bienvenue", "bem-vinda", "欢迎", "chào mừng"]; // Array
var currentTextIndex = 0; // initial index

function changeText() {
	// Get the element where the text will be displayed
	var textElement = document.getElementById("text");

	// Display the current text
	textElement.innerHTML = textArray[currentTextIndex];

	// Increment the index and wrap around if needed
	currentTextIndex = (currentTextIndex + 1) % textArray.length;

	// Wait for 2 seconds
	setTimeout(changeText, 2000);
}








