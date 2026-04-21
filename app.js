const display = document.getElementById('display');

// Dodaje znaki do wyświetlacza
function appendToDisplay(input) {
    display.value += input;
}

// Czyści wyświetlacz (akcja dla przycisku C)
function clearDisplay() {
    display.value = "";
}

// Oblicza wynik
function calculate() {
    try {
        // eval() wykonuje tekst jako działanie matematyczne
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Błąd";
        setTimeout(clearDisplay, 1500);
    }
}
//Funkcja odejmowania obsługiwana przez eval