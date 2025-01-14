// Project 06;
// 1 Kilometer = 0.621371
// miles = kilometers * factor

function convert() {
  var kms = document.getElementById("data").value;
  const factor = 0.621371;
  var miles = kms * factor;
  document.getElementById("result").innerText = `${miles} miles`;
}
