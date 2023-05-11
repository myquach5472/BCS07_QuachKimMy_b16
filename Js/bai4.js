// bai 4

function lenMau() {
  let result = document.getElementById("result4");
  let i = 1;

  while (i <= 10) {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "Div " + i;

    if (i % 2 == 0) {
      newDiv.style.backgroundColor = "IndianRed";
    } else {
      newDiv.style.backgroundColor = "LightSkyBlue";
    }

    result.appendChild(newDiv);
    i++;
  }
}
