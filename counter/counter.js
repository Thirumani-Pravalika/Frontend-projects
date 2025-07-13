let count = 0;

function updateDisplay() {
  document.getElementById("count").innerText = count;
}

function increase() {
  count++;
  updateDisplay();
}

function decrease() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}
