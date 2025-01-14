let value1 = 0;
let value2 = 0;
let operation = 'sum'; // Por defecto, la operación es suma

function agregarNumero(variable, value) {
    if (variable === 1) {
        value1 = value;
        document.getElementById('selectedValue1').textContent = value1;
    } else if (variable === 2) {
        value2 = value;
        document.getElementById('selectedValue2').textContent = value2;
    }
}

function setOperation(op) {
    operation = op;
    document.getElementById('selectedOperation').textContent =
        (operation === 'sum') ? 'Suma' : 'Resta';
}

function calculateResult() {
    let result;
    if (operation === 'sum') {
        result = value1 + value2;
    } else if (operation === 'subtract') {
        result = value1 - value2;
    }
    document.getElementById('result').textContent = result;
}