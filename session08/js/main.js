var total = 0;
for (var i = 0; i < 15; i++) {
  var first = Math.floor(Math.random() * 6 + 1);
  var second = Math.floor(Math.random() * 6 + 1);
  var duble;
  total += first + second;
  if (first == second) {
    duble = first;
  }
  var result = `Первая кость: ${first} Вторая кость: ${second} <br>`;
  document.getElementById("result").innerHTML += result;
  if (duble > 0) {
    document.getElementById(
      "result"
    ).innerHTML += `Выпал дубль. Число ${duble} <br>`;
  }
  if (first < 3 && second > 4) {
    document.getElementById(
      "result"
    ).innerHTML += `Большой разброс между костями. Разница составляет ${second -
      first} <br> `;
  }

  if (i == 8 || i == 13) {
    continue;
  }
  duble = 0;
}

total > 100
  ? (document.getElementById(
      "result"
    ).innerHTML += `Победа, вы набрали ${total} очков`)
  : (document.getElementById(
      "result"
    ).innerHTML += `Вы проиграли, у вас ${total} очков`);
