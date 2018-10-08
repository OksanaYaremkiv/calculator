var number = "",
  total = 0,
  regexp = /[0-9]/,
  mainScreen = document.getElementById("mainScreen");

function InputSymbol(num) {
  var cur = document.getElementById(num).value;
  var prev = number.slice(-1);
  if (!regexp.test(prev) && !regexp.test(cur)) {
    console.log("Two math operators not allowed after each other ;)");
    return;
  }
  number = number.concat(cur);
  mainScreen.innerHTML = number;
}

function CalculateTotal() {
  total = (Math.round(eval(number) * 100) / 100);
  mainScreen.innerHTML = total;
}

function DeleteLastSymbol() {
  if (number) {
    number = number.slice(0, -1);
    mainScreen.innerHTML = number;
  }
  if (number.length === 0) {
    mainScreen.innerHTML = "0";
  }
}

function ClearScreen() {
  number = "";
  mainScreen.innerHTML = 0;
}