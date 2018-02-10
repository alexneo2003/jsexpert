// Code goes here
let elemPowResult = document.getElementById("result_pow");
for (var i = 1; i <= 7; i++) {
  elemPowResult.innerHTML += `Квадрат: ${i} = ${Math.pow(i, 2)}<br>`;
}

let elemEvenResult = document.getElementById("result_even");
elemEvenResult.innerHTML += "Цикл for <br><br>";
for (var i = 1; i <= 15; i++) {
  var result;
  if (i % 2 == 0) {
    result = "Четное;";
  } else {
    result = "Нечетное;";
  }
  elemEvenResult.innerHTML += `Число: ${i}. ${result}<br>`;
}

elemEvenResult.innerHTML += "<br>Цикл while <br><br>";

var j = 1;
while (j < 16) {
  var result;
  if (j % 2 == 0) {
    result = "Четное;";
  } else {
    result = "Нечетное;";
  }
  elemEvenResult.innerHTML += `Число: ${j}. ${result}<br>`;
  j++;
}

elemEvenResult.innerHTML += "<br>Цикл do... while <br><br>";

var n = 1;
do {
  var result;
  if (n % 2 == 0) {
    result = "Четное;";
  } else {
    result = "Нечетное;";
  }
  elemEvenResult.innerHTML += `Число: ${n}. ${result}<br>`;
  n++;
} while (n < 16);

let elemResult = document.getElementById("result");
for (var m = 100; m >= 0; m--) {
  if (
    m == 100 ||
    m == 80 ||
    m == 60 ||
    m == 50 ||
    m == 40 ||
    m == 20 ||
    m == 10 ||
    m == 0
  )
    elemResult.innerHTML += `Число: <b>${m}</b><br>`;
  console.log(m);
}
