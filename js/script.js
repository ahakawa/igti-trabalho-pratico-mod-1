window.addEventListener("load", function () {
  let inputRange = Array.from(document.querySelectorAll('input[type="range"]'));
//   console.log(inputRange, "errrrr");
  let inputText = document.querySelectorAll('input[type="text"]');

  let out = inputRange.forEach((item, index) => {
    document.addEventListener("change", function (ev) {
      inputText[index].value = item.value;
      let inputR = document.getElementById("inputR").value;
      let inputG = document.getElementById("inputG").value;
      let inputB = document.getElementById("inputB").value;

      console.log(inputR, inputG, inputB, "teste");
      let squareDiv = document.getElementById("divSquare");
      squareDiv.style.backgroundColor = `rgb(${inputR}, ${inputG}, ${inputB})`;
      squareDiv.style.border = "1px dashed black";
    });
  });
});
