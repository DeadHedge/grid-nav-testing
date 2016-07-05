console.log(1);
function iterate (x) {
  /* takes a number input and adds that input to itself 100 times.
    Returns a number.*/
  var y = 0;
  for (var i = 0; i < 100 ; i++) {
    x += y;
  }
  return y;
}
iterate(5);

// function testID () {
  var el = document.getElementById("copy");
  var text = el.innerHTML;
  console.log(text);
// }
get
