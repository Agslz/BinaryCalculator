window.onload = () => {
  const uiInput = document.getElementById("ui-number-input");
  const uiButton = document.getElementById("ui-binary-button");
  const uiTitle = document.getElementById("ui-title");

  uiButton.onclick = () => main();

  function main() {
    let value = uiInput.value;
    if (isNum(value)) {
      value = calculate(value);
      changeTitule("The binary form is:");
      showOnInput(value);
    } else {
      showOnInput("Invalid number");
    }
  }

  function isNum(string) {
    return /^\d+$/.test(string);
  }

  function calculate(decimal) {
    let binary = "";
    let reminder;
    while (Math.floor(decimal) != 0) {
      reminder = decimal - Math.floor(decimal / 2) * 2;
      binary = reminder + binary;
      decimal = Math.floor(decimal / 2);
    }
    return binary;
  }

  function showOnInput(textToShow) {
    uiInput.value = textToShow;
  }

  function changeTitule(textToShow) {
    uiTitle.innerHTML = textToShow;
  }
};
