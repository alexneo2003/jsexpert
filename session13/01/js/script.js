(function() {
  (function run() {})();

  function getRndNumber() {
    return Math.floor(Math.random() * 6 + 1);
  }

  function setResult(id, text) {
    document.getElementById(id).innerText += `${text} <br>`;
  }

  function isNumbersEqual(first, second) {
    if (first == second) {
      setResult(result, "Совпадение.");
    }
  }

  function isBigDifference() {}
})();
