// bai 5
function kiemTra(num) {
  if (num <= 1) {
    return false;
  }
  // n phải lớn hơn 1

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  // nếu n chia hết cho 1 số nào nhỏ hơn nó thì sai
  return true;
}

function inKetQua() {
  let result = document.getElementById("result5");
  result.innerHTML = "";

  let n = document.getElementById("n").value;
  let i = 1;

  while (i <= n) {
    if (kiemTra(i)) {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = i;

      result.appendChild(newDiv);
    }

    i++;
  }
}
