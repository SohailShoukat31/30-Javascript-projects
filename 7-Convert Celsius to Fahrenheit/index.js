// Project 07
// Formulla
//  Fahrenheit =  Celsius  * 1.8 + 32
function convert() {
  var c = document.getElementById("data").value;
  var f = c * 1.8 + 32;
  document.getElementById("result").innerText = `${c} °C = ${f} °F`;
}
