let current = '';
let operator = '';
let previous = '';

function append(num) {
  current += num;
  updateDisplay(current);
}

function setOperator(op) {
  if (current === '') return;
  operator = op;
  previous = current;
  current = '';
}

function calculate() {
  if (previous === '' || current === '' || operator === '') return;
  let result;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);

  switch (operator) {
    case '+': result = prev + curr; break;
    case '-': result = prev - curr; break;
    case '*': result = prev * curr; break;
    case '/': result = curr !== 0 ? prev / curr : 'Error'; break;
  }

  updateDisplay(result);
  current = result.toString();
  operator = '';
  previous = '';
}

function clearDisplay() {
  current = '';
  previous = '';
  operator = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  document.getElementById('display').innerText = value;
}
