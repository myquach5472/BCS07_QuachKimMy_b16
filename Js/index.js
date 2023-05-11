/* bai 1
  1+2+3+...+n = n*(n+1)/2
  ===> n*(n+1)/2 > 10000 
  */
function calculate() {
  var sum = 0;
  var n = 0;
  while (sum < 10000) {
    n++;
    sum = (n * (n + 1)) / 2;
  }
  document.getElementById("result1").innerHTML = "Kết quả là: " + (n - 1);
}
