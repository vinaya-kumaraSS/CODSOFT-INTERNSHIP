function clearDisplay() {
    document.querySelector('input[name="display"]').value = '';
}

function deleteLast() {
    let display = document.querySelector('input[name="display"]');
    display.value = display.value.toString().slice(0, -1);
}

function appendValue(value) {
    document.querySelector('input[name="display"]').value += value;
}

function calculateResult() {
    let display = document.querySelector('input[name="display"]');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
