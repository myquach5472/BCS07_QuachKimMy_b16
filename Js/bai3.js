//  bai 3
function giaiThua() {
  let n = document.getElementById("n").value * 1;
  let factorial = 1;
  let i = 1;

  while (i <= n) {
    factorial *= i;
    i++;
  }

  document.getElementById("result3").innerHTML =
    "Giai thừa của số " + n + " là: " + factorial;
}
