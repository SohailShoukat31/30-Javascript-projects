// Project 08
// Using Math.sign() method

function check() {
  var value = document.getElementById("data").value;
  // var result  = Math.sign(value);
  if (value > 0) {
    res = `${value} is a Positive number `;
  } else if (value < 0) {
    res = `${value} is a Negative number `;
  } else if (value == 0) {
    res = `${value} is a Zero `;
  } else {
    res = `${value} is a not a Number  `;
  }
  document.getElementById("res").innerText = res;
  // alert(value)
}
