var fizz = ["Fizz"];
var buzz = ["Buzz"];

for (startNumber = 1; startNumber < 100; startNumber++) {
  if (startNumber%3 == 0 && startNumber%5 ==0)
    document.write(fizz+buzz+"<br>");

  else if (startNumber%5 === 0) {
    document.write(buzz+"<br>");
  }

  else if (startNumber%3 === 0) {
    document.write(fizz+"<br>")
  }

  else {
    document.write(startNumber+"<br>");
  }
}
