// heart number count
let hearts = document.getElementsByClassName("heartBtn");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let heartNumber = document.getElementById("heartNumber");
    let heartNumberConvert = Number(heartNumber.innerText);
    let numberIncrease = heartNumberConvert + 1;
    heartNumber.innerText = numberIncrease;
  });
}

//copy count
let copys = document.getElementsByClassName("copied");

for (let copy of copys) {
  copy.addEventListener("click", function () {
    let CardNumber =
      copy.parentNode.parentNode.children[1].children[2].innerText;
    alert(`☑️Number has copied ${CardNumber}`);

    let copyNumber = document.getElementById("copyNum");
    let copyNumberConvert = Number(copyNumber.innerText);
    let numberIncrease = copyNumberConvert + 1;
    copyNumber.innerText = numberIncrease;

    navigator.clipboard.writeText(CardNumber);
  });
}
