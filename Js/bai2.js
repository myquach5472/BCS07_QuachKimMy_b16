// bai 2
function calculateSum() {
  let x = document.getElementById("x").value * 1;
  let n = document.getElementById("n").value * 1;
  let sum = 0;
  let i = 1;

  while (i <= n) {
    sum += Math.pow(x, i);
    i++;
  }

  document.getElementById("result2").innerHTML = "Kết quả tìm được là: " + sum;
}
